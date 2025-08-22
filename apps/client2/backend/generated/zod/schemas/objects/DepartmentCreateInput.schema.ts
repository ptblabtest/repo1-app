import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema } from './UserCreateNestedOneWithoutCreatorDepartmentInput.schema';
import { UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterDepartmentInput.schema';
import { UserCreateNestedManyWithoutDepartmentInputObjectSchema } from './UserCreateNestedManyWithoutDepartmentInput.schema';
import { DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentCreateInputObjectSchema: z.ZodType<Prisma.DepartmentCreateInput, Prisma.DepartmentCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
