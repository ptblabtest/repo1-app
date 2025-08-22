import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorDepartmentPermissionInput.schema';
import { DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema } from './DepartmentCreateNestedOneWithoutPermissionsInput.schema';
import { PermissionCreateNestedOneWithoutDeptInputObjectSchema } from './PermissionCreateNestedOneWithoutDeptInput.schema'

export const DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateWithoutUpdatedByInput, Prisma.DepartmentPermissionCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutDeptInputObjectSchema)
}).strict();
export const DepartmentPermissionCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutDeptInputObjectSchema)
}).strict();
