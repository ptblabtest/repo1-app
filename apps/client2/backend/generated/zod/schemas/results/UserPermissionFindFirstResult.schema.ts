import { z } from 'zod';
export const UserPermissionFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date(),
  user: z.unknown(),
  permission: z.unknown(),
  createdBy: z.unknown().optional(),
  createdById: z.string().optional(),
  updatedBy: z.unknown().optional(),
  updatedById: z.string().optional()
}));