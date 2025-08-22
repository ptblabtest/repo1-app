import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyUpdatedByInput, Prisma.DepartmentPermissionCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
export const DepartmentPermissionCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
