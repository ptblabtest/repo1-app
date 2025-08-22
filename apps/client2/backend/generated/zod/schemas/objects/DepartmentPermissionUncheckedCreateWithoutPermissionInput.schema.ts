import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUncheckedCreateWithoutPermissionInput, Prisma.DepartmentPermissionUncheckedCreateWithoutPermissionInput> = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectZodSchema = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
