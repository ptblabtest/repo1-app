import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema } from './UserCreateNestedOneWithoutCreatorDepartmentInput.schema';
import { UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterDepartmentInput.schema';
import { DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.DepartmentCreateWithoutUsersInput, Prisma.DepartmentCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentCreateWithoutUsersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
