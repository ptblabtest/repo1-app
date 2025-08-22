import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorPermissionNestedInput.schema';
import { UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterPermissionNestedInput.schema';
import { UserPermissionUpdateManyWithoutPermissionNestedInputObjectSchema } from './UserPermissionUpdateManyWithoutPermissionNestedInput.schema'

export const PermissionUpdateWithoutDeptInputObjectSchema: z.ZodType<Prisma.PermissionUpdateWithoutDeptInput, Prisma.PermissionUpdateWithoutDeptInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
export const PermissionUpdateWithoutDeptInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
