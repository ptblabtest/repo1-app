import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionCreateManyDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyDepartmentInput, Prisma.DepartmentPermissionCreateManyDepartmentInput> = z.object({
  id: z.string().optional(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentPermissionCreateManyDepartmentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
