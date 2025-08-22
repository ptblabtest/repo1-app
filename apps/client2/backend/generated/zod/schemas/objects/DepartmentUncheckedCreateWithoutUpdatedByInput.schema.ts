import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutUpdatedByInput, Prisma.DepartmentUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentUncheckedCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
