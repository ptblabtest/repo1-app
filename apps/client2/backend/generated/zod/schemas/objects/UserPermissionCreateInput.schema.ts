import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutPermissionsInputObjectSchema } from './UserCreateNestedOneWithoutPermissionsInput.schema';
import { PermissionCreateNestedOneWithoutUsersInputObjectSchema } from './PermissionCreateNestedOneWithoutUsersInput.schema';
import { UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorUserPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterUserPermissionInput.schema'

export const UserPermissionCreateInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateInput, Prisma.UserPermissionCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUsersInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema).optional()
}).strict();
export const UserPermissionCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUsersInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema).optional()
}).strict();
