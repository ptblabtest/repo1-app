import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorDepartmentPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterDepartmentPermissionInput.schema';
import { DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema } from './DepartmentCreateNestedOneWithoutPermissionsInput.schema'

export const DepartmentPermissionCreateWithoutPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateWithoutPermissionInput, Prisma.DepartmentPermissionCreateWithoutPermissionInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema)
}).strict();
export const DepartmentPermissionCreateWithoutPermissionInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema)
}).strict();
