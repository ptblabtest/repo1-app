import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutUsersInput, Prisma.DepartmentUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentUncheckedCreateWithoutUsersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
