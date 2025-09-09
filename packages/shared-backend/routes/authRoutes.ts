import express from "express";
import passport from "../auth/passport";
import authService from "../modules/auth/AuthService";
import { AuthUser } from "../types/auth";
import { requireAuth } from "../middlewares/auth";

const router = express.Router();

// Register
router.post("/register", async (req, res, next) => {
  try {
    const user = await authService.register(req.body, false); // Not authorized

    res.status(201).json({
      message: "User created successfully. Please wait for activation.",
      user,
    });
  } catch (error: any) {
    console.error("Registration error:", error);

    if (
      error.message.includes("already exists") ||
      error.message.includes("Invalid") ||
      error.message.includes("required") ||
      error.message.includes("at least")
    ) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Server error" });
  }
});

router.patch("/update-user/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const user = await authService.updateUser(id, req.body);
    res.json({ message: "User updated successfully", user });
  } catch (error: any) {
    console.error("Update user error:", error);

    if (error.message.includes("Password cannot be updated")) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Failed to update user" });
  }
});

router.post("/admin/register", requireAuth, async (req, res, next) => {
  try {
    // Check if current user has admin privileges
    const currentUser = req.user as any;
    if (currentUser.role?.name !== "ADMIN") {
      return res.status(403).json({ message: "Unauthorized to create users" });
    }

    const user = await authService.register(req.body, true);

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error: any) {
    console.error("Admin registration error:", error);

    if (
      error.message.includes("already exists") ||
      error.message.includes("Invalid") ||
      error.message.includes("required") ||
      error.message.includes("at least")
    ) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Server error" });
  }
});

// Login
router.post("/login", (req, res, next) => {
  // Console log login attempt details
  console.log("Login attempt:", {
    username: req.body.username,
    timestamp: new Date().toISOString(),
    ip: req.ip,
    userAgent: req.headers["user-agent"],
  });

  passport.authenticate(
    "local",
    (err: any, user: AuthUser | false, info: { message?: string }) => {
      if (err) {
        // Console log authentication errors
        console.error("Login authentication error:", {
          error: err.message || err,
          username: req.body.username,
          timestamp: new Date().toISOString(),
        });
        return next(err);
      }

      if (!user) {
        // Console log failed login attempts
        console.error("Login failed:", {
          reason: info.message || "Login failed",
          username: req.body.username,
          timestamp: new Date().toISOString(),
        });
        return res.status(401).json({
          message: info.message || "Login failed",
        });
      }

      req.login(user, (err) => {
        if (err) {
          // Console log session creation errors
          console.error("Login session error:", {
            error: err.message || err,
            username: req.body.username,
            timestamp: new Date().toISOString(),
          });
          return next(err);
        }
        res.json({ message: "Login successful", user });
      });
    }
  )(req, res, next);
});


// Logout
router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Session cleanup failed" });
      }
      res.clearCookie("connect.sid");
      res.json({ message: "Logout successful" });
    });
  });
});

// Logout from all devices
router.post("/logout-all", requireAuth, async (req, res) => {
  try {
    const userId = (req.user as any).id;

    await authService.logoutAllDevices(userId);

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
});

// Get current user
router.get("/me", requireAuth, async (req, res) => {
  try {
    const userId = (req.user as any).id;

    const user = await authService.getUserProfile(userId);
    res.json({ user });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ message: "Failed to get user profile" });
  }
});

// Change password
router.post("/change-password", requireAuth, async (req, res) => {
  try {
    const userId = (req.user as any).id;
    const { currentPassword, newPassword } = req.body;

    const result = await authService.changePassword(
      userId,
      currentPassword,
      newPassword
    );

    res.json(result);
  } catch (error: any) {
    console.error("Change password error:", error);

    if (
      error.message.includes("incorrect") ||
      error.message.includes("different") ||
      error.message.includes("at least") ||
      error.message.includes("required")
    ) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Failed to change password" });
  }
});

router.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;
