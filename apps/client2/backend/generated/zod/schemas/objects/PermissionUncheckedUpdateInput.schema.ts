import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutPermissionNestedInput.schema'

export const PermissionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PermissionUncheckedUpdateInput, Prisma.PermissionUncheckedUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  dept: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
export const PermissionUncheckedUpdateInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  dept: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema).optional()
}).strict();
