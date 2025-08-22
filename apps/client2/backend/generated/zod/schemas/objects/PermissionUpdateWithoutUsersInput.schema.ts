import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorPermissionNestedInput.schema';
import { UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterPermissionNestedInput.schema';
import { DepartmentPermissionUpdateManyWithoutPermissionNestedInputObjectSchema } from './DepartmentPermissionUpdateManyWithoutPermissionNestedInput.schema'

export const PermissionUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.PermissionUpdateWithoutUsersInput, Prisma.PermissionUpdateWithoutUsersInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
export const PermissionUpdateWithoutUsersInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
