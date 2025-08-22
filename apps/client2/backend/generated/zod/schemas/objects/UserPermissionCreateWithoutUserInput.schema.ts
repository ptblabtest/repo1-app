import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateNestedOneWithoutUsersInputObjectSchema } from './PermissionCreateNestedOneWithoutUsersInput.schema';
import { UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorUserPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterUserPermissionInput.schema'

export const UserPermissionCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateWithoutUserInput, Prisma.UserPermissionCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUsersInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema).optional()
}).strict();
export const UserPermissionCreateWithoutUserInputObjectZodSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUsersInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema).optional()
}).strict();
