import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterDepartmentNestedInput.schema';
import { UserUpdateManyWithoutDepartmentNestedInputObjectSchema } from './UserUpdateManyWithoutDepartmentNestedInput.schema';
import { DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema } from './DepartmentPermissionUpdateManyWithoutDepartmentNestedInput.schema'

export const DepartmentUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateWithoutCreatedByInput, Prisma.DepartmentUpdateWithoutCreatedByInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
export const DepartmentUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
