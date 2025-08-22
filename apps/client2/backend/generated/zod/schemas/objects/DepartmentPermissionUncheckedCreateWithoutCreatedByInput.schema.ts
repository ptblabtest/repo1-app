import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUncheckedCreateWithoutCreatedByInput, Prisma.DepartmentPermissionUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
