import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorDepartmentPermissionNestedInput.schema';
import { UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInput.schema';
import { DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './DepartmentUpdateOneRequiredWithoutPermissionsNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutDeptNestedInput.schema'

export const DepartmentPermissionUpdateInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateInput, Prisma.DepartmentPermissionUpdateInput> = z.object({
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema).optional()
}).strict();
export const DepartmentPermissionUpdateInputObjectZodSchema = z.object({
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema).optional()
}).strict();
