import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutUsersNestedInput.schema';
import { UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorUserPermissionNestedInput.schema';
import { UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterUserPermissionNestedInput.schema'

export const UserPermissionUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateWithoutUserInput, Prisma.UserPermissionUpdateWithoutUserInput> = z.object({
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema).optional()
}).strict();
export const UserPermissionUpdateWithoutUserInputObjectZodSchema = z.object({
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema).optional()
}).strict();
