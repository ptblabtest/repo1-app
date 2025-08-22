import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutPermissionNestedInput.schema'

export const PermissionUncheckedUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionUncheckedUpdateWithoutCreatedByInput, Prisma.PermissionUncheckedUpdateWithoutCreatedByInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  dept: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
export const PermissionUncheckedUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  dept: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
