import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema } from './UserCreateNestedOneWithoutCreatorDepartmentInput.schema';
import { UserCreateNestedManyWithoutDepartmentInputObjectSchema } from './UserCreateNestedManyWithoutDepartmentInput.schema';
import { DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentCreateWithoutUpdatedByInput, Prisma.DepartmentCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
