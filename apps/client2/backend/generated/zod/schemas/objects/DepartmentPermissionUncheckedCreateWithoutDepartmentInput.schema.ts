import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUncheckedCreateWithoutDepartmentInput, Prisma.DepartmentPermissionUncheckedCreateWithoutDepartmentInput> = z.object({
  id: z.string().optional(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
