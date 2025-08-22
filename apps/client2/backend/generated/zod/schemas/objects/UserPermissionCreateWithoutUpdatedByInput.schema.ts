import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutPermissionsInputObjectSchema } from './UserCreateNestedOneWithoutPermissionsInput.schema';
import { PermissionCreateNestedOneWithoutUsersInputObjectSchema } from './PermissionCreateNestedOneWithoutUsersInput.schema';
import { UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorUserPermissionInput.schema'

export const UserPermissionCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateWithoutUpdatedByInput, Prisma.UserPermissionCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUsersInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema).optional()
}).strict();
export const UserPermissionCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPermissionsInputObjectSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUsersInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema).optional()
}).strict();
