import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterDepartmentPermissionInput.schema';
import { DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema } from './DepartmentCreateNestedOneWithoutPermissionsInput.schema';
import { PermissionCreateNestedOneWithoutDeptInputObjectSchema } from './PermissionCreateNestedOneWithoutDeptInput.schema'

export const DepartmentPermissionCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateWithoutCreatedByInput, Prisma.DepartmentPermissionCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutDeptInputObjectSchema)
}).strict();
export const DepartmentPermissionCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutDeptInputObjectSchema)
}).strict();
