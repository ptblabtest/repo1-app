import { z } from 'zod';
export const DepartmentPermissionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date(),
  createdBy: z.unknown().optional(),
  createdById: z.string().optional(),
  updatedBy: z.unknown().optional(),
  updatedById: z.string().optional(),
  department: z.unknown(),
  permission: z.unknown()
}));