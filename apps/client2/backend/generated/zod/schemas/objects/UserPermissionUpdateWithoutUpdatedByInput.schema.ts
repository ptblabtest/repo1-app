import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPermissionsNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutUsersNestedInput.schema';
import { UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorUserPermissionNestedInput.schema'

export const UserPermissionUpdateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateWithoutUpdatedByInput, Prisma.UserPermissionUpdateWithoutUpdatedByInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema).optional()
}).strict();
export const UserPermissionUpdateWithoutUpdatedByInputObjectZodSchema = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema).optional()
}).strict();
