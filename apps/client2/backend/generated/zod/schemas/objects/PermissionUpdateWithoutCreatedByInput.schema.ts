import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterPermissionNestedInput.schema';
import { DepartmentPermissionUpdateManyWithoutPermissionNestedInputObjectSchema } from './DepartmentPermissionUpdateManyWithoutPermissionNestedInput.schema';
import { UserPermissionUpdateManyWithoutPermissionNestedInputObjectSchema } from './UserPermissionUpdateManyWithoutPermissionNestedInput.schema'

export const PermissionUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionUpdateWithoutCreatedByInput, Prisma.PermissionUpdateWithoutCreatedByInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionUpdateManyWithoutPermissionNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
export const PermissionUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionUpdateManyWithoutPermissionNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
