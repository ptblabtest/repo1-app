import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterDepartmentInput.schema';
import { UserCreateNestedManyWithoutDepartmentInputObjectSchema } from './UserCreateNestedManyWithoutDepartmentInput.schema';
import { DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentCreateWithoutCreatedByInput, Prisma.DepartmentCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
