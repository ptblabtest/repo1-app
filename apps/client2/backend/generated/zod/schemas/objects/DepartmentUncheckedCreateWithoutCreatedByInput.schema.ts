import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutCreatedByInput, Prisma.DepartmentUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  updatedById: z.string().nullish(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentUncheckedCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  updatedById: z.string().nullish(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
