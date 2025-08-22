import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyCreatedByInput, Prisma.DepartmentPermissionCreateManyCreatedByInput> = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentPermissionCreateManyCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
