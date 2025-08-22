import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorDepartmentNestedInput.schema';
import { UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterDepartmentNestedInput.schema';
import { UserUpdateManyWithoutDepartmentNestedInputObjectSchema } from './UserUpdateManyWithoutDepartmentNestedInput.schema'

export const DepartmentUpdateWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateWithoutPermissionsInput, Prisma.DepartmentUpdateWithoutPermissionsInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
export const DepartmentUpdateWithoutPermissionsInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
