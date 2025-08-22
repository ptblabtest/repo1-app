import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema } from './UserCreateNestedOneWithoutCreatorDepartmentInput.schema';
import { UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterDepartmentInput.schema';
import { UserCreateNestedManyWithoutDepartmentInputObjectSchema } from './UserCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentCreateWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.DepartmentCreateWithoutPermissionsInput, Prisma.DepartmentCreateWithoutPermissionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentCreateWithoutPermissionsInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
