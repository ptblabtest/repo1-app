import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutDepartmentNestedInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInput.schema'

export const DepartmentUncheckedUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutCreatedByInput, Prisma.DepartmentUncheckedUpdateWithoutCreatedByInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
export const DepartmentUncheckedUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
