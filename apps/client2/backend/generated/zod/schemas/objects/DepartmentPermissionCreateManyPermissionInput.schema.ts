import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionCreateManyPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyPermissionInput, Prisma.DepartmentPermissionCreateManyPermissionInput> = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentPermissionCreateManyPermissionInputObjectZodSchema = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
