import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutPermissionsInputObjectSchema } from './UserCreateNestedOneWithoutPermissionsInput.schema';
import { UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorUserPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterUserPermissionInput.schema'

export const UserPermissionCreateWithoutPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateWithoutPermissionInput, Prisma.UserPermissionCreateWithoutPermissionInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPermissionsInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema).optional()
}).strict();
export const UserPermissionCreateWithoutPermissionInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPermissionsInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema).optional()
}).strict();
