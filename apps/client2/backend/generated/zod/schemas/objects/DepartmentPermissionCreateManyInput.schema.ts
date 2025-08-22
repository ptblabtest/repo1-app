import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionCreateManyInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyInput, Prisma.DepartmentPermissionCreateManyInput> = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentPermissionCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
