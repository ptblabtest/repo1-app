import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorDepartmentNestedInput.schema';
import { UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterDepartmentNestedInput.schema';
import { UserUpdateManyWithoutDepartmentNestedInputObjectSchema } from './UserUpdateManyWithoutDepartmentNestedInput.schema';
import { DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema } from './DepartmentPermissionUpdateManyWithoutDepartmentNestedInput.schema'

export const DepartmentUpdateInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateInput, Prisma.DepartmentUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
export const DepartmentUpdateInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
