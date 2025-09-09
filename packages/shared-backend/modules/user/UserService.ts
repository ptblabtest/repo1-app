import prisma from "../../lib/prisma";
import { prepareForView } from "../../utils/query/prepareForView";

const USER_SELECT = {
  id: true,
  username: true,
  createdAt: true,
  updatedAt: true,
  role: {
    select: {
      id: true,
      name: true,
    },
  },
  organization: true,
  status: true,
  profile: {
    select: {
      id: true,
      name: true,
      joinDate: true,
      createdAt: true,
      updatedAt: true,
    },
  },
};

const transformUser = (user: any) => {
  const prepared = prepareForView(user);
  return {
    ...prepared,
    roleName: prepared.role?.name || null,
    organizationName: prepared.organization?.name || null,
    roleId: prepared.role?.id || null,
    profileName: prepared.profile?.name || null,
    joinDate: prepared.profile?.joinDate || null,
  };
};

export const userService = {
  findMany: async (queryParams?: any) => {
    const users = await prisma.user.findMany({
      ...queryParams,
      select: USER_SELECT,
    });

    return users.map(transformUser);
  },

  findUnique: async (id: string) => {
    const user = await prisma.user.findUnique({
      where: { id },
      select: USER_SELECT,
    });

    if (!user) return null;

    return transformUser(user);
  },

  update: async (id: string, data: any, user: any) => {
    // Check if password field exists in update data
    if (data.password) {
      throw new Error(
        "Password cannot be updated through this endpoint. Please use change password feature."
      );
    }

    const processedData: any = { ...data };

    if (data.profileName || data.joinDate) {
      processedData.profile = {
        update: {
          ...(data.profileName && { name: data.profileName }),
          ...(data.joinDate && {
            joinDate: new Date(data.joinDate).toISOString(),
          }),
        },
      };
      // Remove from root level
      delete processedData.profileName;
      delete processedData.joinDate;
      delete processedData.roleName;
    }

    processedData.updatedById = user.id;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: processedData,
      select: USER_SELECT,
    });

    return transformUser(updatedUser);
  },

  getForm: async (id?: string) => {
    if (!id) {
      throw new Error("User ID is required");
    }

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        status: true,
        roleId: true,
        profile: {
          select: {
            name: true,
            joinDate: true,
          },
        },
      },
    });

    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
      status: user.status,
      roleId: user.roleId,
      profileName: user.profile?.name || "",
      joinDate: user.profile?.joinDate
        ? new Date(user.profile.joinDate).toISOString().split("T")[0]
        : "",
    };
  },
};