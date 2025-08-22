import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutPermissionsInputObjectSchema } from './UserCreateNestedOneWithoutPermissionsInput.schema';
import { PermissionCreateNestedOneWithoutUsersInputObjectSchema } from './PermissionCreateNestedOneWithoutUsersInput.schema';
import { UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterUserPermissionInput.schema'

export const UserPermissionCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateWithoutCreatedByInput, Prisma.UserPermissionCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUsersInputObjectSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema).optional()
}).strict();
export const UserPermissionCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUsersInputObjectSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema).optional()
}).strict();
