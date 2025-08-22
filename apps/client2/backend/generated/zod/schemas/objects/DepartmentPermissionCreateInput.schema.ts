import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorDepartmentPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterDepartmentPermissionInput.schema';
import { DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema } from './DepartmentCreateNestedOneWithoutPermissionsInput.schema';
import { PermissionCreateNestedOneWithoutDeptInputObjectSchema } from './PermissionCreateNestedOneWithoutDeptInput.schema'

export const DepartmentPermissionCreateInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateInput, Prisma.DepartmentPermissionCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutDeptInputObjectSchema)
}).strict();
export const DepartmentPermissionCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutDeptInputObjectSchema)
}).strict();
