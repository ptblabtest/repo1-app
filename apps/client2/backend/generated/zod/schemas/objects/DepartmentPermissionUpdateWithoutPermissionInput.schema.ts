import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorDepartmentPermissionNestedInput.schema';
import { UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInput.schema';
import { DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './DepartmentUpdateOneRequiredWithoutPermissionsNestedInput.schema'

export const DepartmentPermissionUpdateWithoutPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateWithoutPermissionInput, Prisma.DepartmentPermissionUpdateWithoutPermissionInput> = z.object({
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional()
}).strict();
export const DepartmentPermissionUpdateWithoutPermissionInputObjectZodSchema = z.object({
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional()
}).strict();
