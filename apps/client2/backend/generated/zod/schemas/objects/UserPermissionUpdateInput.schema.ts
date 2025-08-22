import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPermissionsNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutUsersNestedInput.schema';
import { UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorUserPermissionNestedInput.schema';
import { UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterUserPermissionNestedInput.schema'

export const UserPermissionUpdateInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateInput, Prisma.UserPermissionUpdateInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema).optional()
}).strict();
export const UserPermissionUpdateInputObjectZodSchema = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema).optional()
}).strict();
