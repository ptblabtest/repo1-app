import argon2 from "argon2";
import prisma from "../../lib/prisma";

class AuthService {
  async register(data: any, isAuthorized: boolean = false) {
    // Validate input
    this.validateRegistrationData(data);

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { username: data.username },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Validate related entities
    if (data.roleId) {
      await this.validateRole(data.roleId);
    }

    if (data.organizationId) {
      await this.validateOrganization(data.organizationId);
    }

    // Hash password and create user
    const hashedPassword = await argon2.hash(data.password);

    const user = await prisma.user.create({
      data: {
        username: data.username,
        password: hashedPassword,
        roleId: data.roleId || null,
        organizationId: data.organizationId || null,
        status: isAuthorized ? "ACTIVE" : "INACTIVE",
        profile: {
          create: {
            name: data.profileName || null,
            joinDate: data.joinDate || new Date(),
          },
        },
      },
      select: {
        id: true,
        username: true,
        status: true,
        roleId: true,
        organizationId: true,
        profile: {
          select: {
            name: true,
            joinDate: true,
          },
        },
      },
    });

    return user;
  }

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string
  ) {
    // Validate passwords
    if (!currentPassword || !newPassword) {
      throw new Error("All fields are required");
    }

    if (newPassword.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    if (currentPassword === newPassword) {
      throw new Error("New password must be different from current password");
    }

    // Get user and verify current password
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { password: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isValid = await argon2.verify(user.password, currentPassword);
    if (!isValid) {
      throw new Error("Current password is incorrect");
    }

    // Update password
    const hashedPassword = await argon2.hash(newPassword);
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    // Invalidate all user sessions
    await this.invalidateUserSessions(userId);

    return { message: "Password changed successfully. Please login again." };
  }

  async logoutAllDevices(userId: string) {
    await this.invalidateUserSessions(userId);
  }

  async getUserProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        status: true,
        profile: {
          select: {
            name: true,
          },
        },
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Transform the response to include profileName
    if (user) {
      return {
        id: user.id,
        username: user.username,
        status: user.status,
        profile: user.profile,
        organization: user.organization,
      };
    }

    return user;
  }

  async updateUser(userId: string, data: any) {
    // Don't allow password updates through this method
    if (data.password) {
      throw new Error("Password cannot be updated through this endpoint");
    }

    const updateData: any = { ...data };

    // Remove profile fields from root level
    delete updateData.profileName;
    delete updateData.joinDate;
    delete updateData.password;
    delete updateData.confirmPassword;

    // Handle profile update if profile fields exist
    if (data.profileName || data.joinDate) {
      updateData.profile = {
        update: {
          ...(data.profileName && { name: data.profileName }),
          ...(data.joinDate && {
            joinDate: new Date(data.joinDate).toISOString(),
          }),
        },
      };
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        username: true,
        status: true,
        roleId: true,
        organizationId: true,
        profile: {
          select: {
            name: true,
            joinDate: true,
          },
        },
      },
    });

    return user;
  }

  // Private helper methods
  private validateRegistrationData(data: any) {
    if (!data.username || !data.password) {
      throw new Error("All fields are required");
    }

    // For text username validation (not email)
    if (data.username.length < 3) {
      throw new Error("Username must be at least 3 characters");
    }

    // Optional: Add more username validations
    const usernameRegex = /^[a-zA-Z0-9_-]+$/; // Only letters, numbers, underscore, hyphen
    if (!usernameRegex.test(data.username)) {
      throw new Error(
        "Username can only contain letters, numbers, underscore and hyphen"
      );
    }

    if (data.password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
  }

  private async validateRole(roleId: string) {
    const role = await prisma.role.findUnique({ where: { id: roleId } });
    if (!role) {
      throw new Error("Invalid role ID");
    }
  }

  private async validateOrganization(organizationId: string) {
    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
    });
    if (!organization) {
      throw new Error("Invalid organization ID");
    }
  }

  private async invalidateUserSessions(userId: string) {
    const sessions = await prisma.session.findMany();

    const userSessions = sessions.filter((session: any) => {
      const sessData = session.sess as any;
      return sessData?.passport?.user === userId;
    });

    if (userSessions.length > 0) {
      await prisma.session.deleteMany({
        where: {
          sid: {
            in: userSessions.map((s: any) => s.sid),
          },
        },
      });
    }
  }
}

export default new AuthService();
