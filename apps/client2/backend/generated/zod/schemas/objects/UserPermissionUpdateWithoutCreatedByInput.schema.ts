import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPermissionsNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutUsersNestedInput.schema';
import { UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterUserPermissionNestedInput.schema'

export const UserPermissionUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateWithoutCreatedByInput, Prisma.UserPermissionUpdateWithoutCreatedByInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema).optional()
}).strict();
export const UserPermissionUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema).optional()
}).strict();
