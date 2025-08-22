import { z } from 'zod';
export const DepartmentPermissionFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});