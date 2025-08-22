import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorDepartmentPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterDepartmentPermissionInput.schema';
import { PermissionCreateNestedOneWithoutDeptInputObjectSchema } from './PermissionCreateNestedOneWithoutDeptInput.schema'

export const DepartmentPermissionCreateWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateWithoutDepartmentInput, Prisma.DepartmentPermissionCreateWithoutDepartmentInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutDeptInputObjectSchema)
}).strict();
export const DepartmentPermissionCreateWithoutDepartmentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutDeptInputObjectSchema)
}).strict();
