import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorDepartmentNestedInput.schema';
import { UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterDepartmentNestedInput.schema';
import { DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema } from './DepartmentPermissionUpdateManyWithoutDepartmentNestedInput.schema'

export const DepartmentUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateWithoutUsersInput, Prisma.DepartmentUpdateWithoutUsersInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
export const DepartmentUpdateWithoutUsersInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUpdateManyWithoutDepartmentNestedInputObjectSchema).optional()
}).strict();
