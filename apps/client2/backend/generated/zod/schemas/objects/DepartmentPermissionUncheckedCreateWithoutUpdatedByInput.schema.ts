import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUncheckedCreateWithoutUpdatedByInput, Prisma.DepartmentPermissionUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
export const DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
