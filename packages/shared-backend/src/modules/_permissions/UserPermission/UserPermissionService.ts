import { serviceFactory } from "../../../shared/utils/serviceFactory";

export const userPermissionService = serviceFactory("userPermission", {
  operations: ["create", "findMany", "findUnique", "delete", "upsert"],
  queryOptions: {
    select: {
      id: true,
      userId: true,
      permissionId: true,
      createdAt: true,
      user: {
        select: {
          id: true,
          username: true,
        }
      },
      permission: {
        select: {
          id: true,
          name: true,
          resource: true,
          action: true,
          description: true,
        }
      }
    }
  },
  transformData: (result: any) => {
    return {
      ...result,
      permissionName: result.permission?.name,
      userName: result.user?.name,
    };
  }
});