import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutDepartmentNestedInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInput.schema'

export const DepartmentUncheckedUpdateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutUpdatedByInput, Prisma.DepartmentUncheckedUpdateWithoutUpdatedByInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
export const DepartmentUncheckedUpdateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
