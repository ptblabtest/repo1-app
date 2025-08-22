import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import prisma from "../lib/prisma";
import argon2 from "argon2";
import { AuthUser } from "../types/auth";

// Local Strategy for Email Authentication
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email: string, password: string, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { email },
          select: {
            id: true,
            email: true,
            name: true,
            password: true,
            status: true,
          },
        });

        if (!user) {
          return done(null, false, { message: "Invalid email or password" });
        }

        // Check if user is active
        if (user.status !== "ACTIVE") {
          return done(null, false, { message: "Account is not active" });
        }

        const isValid = await argon2.verify(user.password, password);
        if (!isValid) {
          return done(null, false, { message: "Invalid email or password" });
        }

        // Remove password from user object
        const { password: _, ...userWithoutPassword } = user;
        return done(null, userWithoutPassword as any);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize user for session
passport.serializeUser((user: AuthUser, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true, // Only for display purposes
        status: true,
        organizationId: true,
        roleId: true,
        departmentId: true,
      },
    });

    // Check if user still exists and is active
    if (!user || user.status !== "ACTIVE") {
      return done(null, false);
    }

    done(null, user as any);
  } catch (error) {
    done(error);
  }
});

export default passport;