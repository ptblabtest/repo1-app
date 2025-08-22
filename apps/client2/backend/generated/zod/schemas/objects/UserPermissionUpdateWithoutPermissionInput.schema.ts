import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPermissionsNestedInput.schema';
import { UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorUserPermissionNestedInput.schema';
import { UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterUserPermissionNestedInput.schema'

export const UserPermissionUpdateWithoutPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateWithoutPermissionInput, Prisma.UserPermissionUpdateWithoutPermissionInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema).optional()
}).strict();
export const UserPermissionUpdateWithoutPermissionInputObjectZodSchema = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema).optional()
}).strict();
