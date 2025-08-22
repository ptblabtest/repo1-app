import express from "express";
import argon2 from "argon2";
import passport from "../auth/passport";
import { RegisterRequest, AuthUser } from "../types/auth";
import prisma from "../lib/prisma";
import { requireAuth } from "../shared/middlewares/auth";

const router = express.Router();

// Register
router.post(
  "/register",
  async (req: express.Request, res: express.Response) => {
    try {
      const {
        username,
        password,
        roleId,
        organizationId,
        departmentId,
      }: RegisterRequest = req.body;

      // Validation
      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ message: "Password must be at least 6 characters" });
      }

      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { username },
      });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Validate roleId if provided
      if (roleId) {
        const role = await prisma.role.findUnique({ where: { id: roleId } });
        if (!role) {
          return res.status(400).json({ message: "Invalid role ID" });
        }
      }

      // Validate organizationId if provided
      if (organizationId) {
        const organization = await prisma.organization.findUnique({
          where: { id: organizationId },
        });
        if (!organization) {
          return res.status(400).json({ message: "Invalid organization ID" });
        }
      }

      // Validate departmentId if provided
      if (departmentId) {
        const department = await prisma.department.findUnique({
          where: { id: departmentId },
        });
        if (!department) {
          return res.status(400).json({ message: "Invalid department ID" });
        }
      }

      // Hash password
      const hashedPassword = await argon2.hash(password);

      // Create user
      const user = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          roleId: roleId || null,
          organizationId: organizationId || null,
          departmentId: departmentId || null,
        },
        select: {
          id: true,
          username: true,
          status: true,
          roleId: true,
          organizationId: true,
        },
      });

      // Auto login after registration
      req.login(user as AuthUser, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Registration successful but login failed" });
        }
        res.status(201).json({ message: "User created successfully", user });
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// Login
router.post(
  "/login",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    passport.authenticate(
      "local",
      (err: any, user: AuthUser | false, info: { message?: string }) => {
        if (err) {
          return next(err);
        }

        if (!user) {
          return res
            .status(401)
            .json({ message: info.message || "Login failed" });
        }

        req.login(user, (err) => {
          if (err) {
            return next(err);
          }

          res.json({ message: "Login successful", user });
        });
      }
    )(req, res, next);
  }
);

// Logout
router.post("/logout", (req: express.Request, res: express.Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    // Destroy session completely
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Session cleanup failed" });
      }
      res.clearCookie("connect.sid"); // Clear the session cookie
      res.json({ message: "Logout successful" });
    });
  });
});

// Logout from all devices
router.post(
  "/logout-all",
  requireAuth,
  async (req: express.Request, res: express.Response) => {
    try {
      const userId = (req.user as any).id;

      // Find and delete all sessions containing this user's ID
      const sessions = await prisma.session.findMany();

      // Filter sessions that belong to this user
      const userSessions = sessions.filter((session) => {
        const sessData = session.sess as any;
        return sessData?.passport?.user === userId;
      });

      // Delete those sessions
      if (userSessions.length > 0) {
        await prisma.session.deleteMany({
          where: {
            sid: {
              in: userSessions.map((s) => s.sid),
            },
          },
        });
      }

      // Also logout current session
      req.logout((err) => {
        if (err) {
          return res.status(500).json({ message: "Logout failed" });
        }
        req.session.destroy((err) => {
          if (err) {
            return res.status(500).json({ message: "Session cleanup failed" });
          }
          res.clearCookie("connect.sid");
          res.json({ message: "Logged out from all devices" });
        });
      });
    } catch (error) {
      console.error("Logout all error:", error);
      res.status(500).json({ message: "Failed to logout from all devices" });
    }
  }
);

// Get current user
router.get(
  "/me",
  requireAuth,
  async (req: express.Request, res: express.Response) => {
    const { full } = req.query;

    if (full === "true") {
      // Apply withFullProfile logic inline
      const userWithRelations = await prisma.user.findUnique({
        where: { id: (req.user as any).id },
        select: {
          id: true,
          username: true,
          status: true,
          organizationId: true,
          roleId: true,
          departmentId: true,
          role: true,
          department: true,
          organization: true,
          profile: true,
        },
      });
      return res.json({ user: userWithRelations });
    }

    // Basic user data from session
    res.json({ user: req.user });
  }
);

router.get("/health", (req: express.Request, res: express.Response) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

router.post(
  "/change-password",
  requireAuth,
  async (req: express.Request, res: express.Response) => {
    try {
      const { currentPassword, newPassword } = req.body;
      const userId = (req.user as any).id;

      // Validate
      if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (newPassword.length < 8) {
        return res
          .status(400)
          .json({ message: "Password must be at least 8 characters" });
      }

      if (currentPassword === newPassword) {
        return res.status(400).json({
          message: "New password must be different from current password",
        });
      }

      // Get user with password
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { password: true },
      });

      // Verify current password
      const isValid = await argon2.verify(user!.password, currentPassword);
      if (!isValid) {
        return res
          .status(401)
          .json({ message: "Current password is incorrect" });
      }

      // Hash and update password
      const hashedPassword = await argon2.hash(newPassword);
      await prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });

      // Logout from all devices for security
      const sessions = await prisma.session.findMany();
      const userSessions = sessions.filter((session) => {
        const sessData = session.sess as any;
        return sessData?.passport?.user === userId;
      });

      if (userSessions.length > 0) {
        await prisma.session.deleteMany({
          where: {
            sid: {
              in: userSessions.map((s) => s.sid),
            },
          },
        });
      }

      res.json({
        message: "Password changed successfully. Please login again.",
      });
    } catch (error) {
      console.error("Change password error:", error);
      res.status(500).json({ message: "Failed to change password" });
    }
  }
);

export default router;
