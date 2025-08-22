import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorDepartmentNestedInput.schema';
import { UserUpdateManyWithoutDepartmentNestedInputObjectSchema } from './UserUpdateManyWithoutDepartmentNestedInput.schema';
import { DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema } from './DepartmentPermissionUpdateManyWithoutDepartmentNestedInput.schema'

export const DepartmentUpdateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateWithoutUpdatedByInput, Prisma.DepartmentUpdateWithoutUpdatedByInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
export const DepartmentUpdateWithoutUpdatedByInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
