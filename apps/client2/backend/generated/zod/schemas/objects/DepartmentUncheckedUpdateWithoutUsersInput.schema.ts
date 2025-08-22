import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInput.schema'

export const DepartmentUncheckedUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutUsersInput, Prisma.DepartmentUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
export const DepartmentUncheckedUpdateWithoutUsersInputObjectZodSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
