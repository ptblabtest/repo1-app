import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInput.schema';
import { DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './DepartmentUpdateOneRequiredWithoutPermissionsNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutDeptNestedInput.schema'

export const DepartmentPermissionUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateWithoutCreatedByInput, Prisma.DepartmentPermissionUpdateWithoutCreatedByInput> = z.object({
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema).optional()
}).strict();
export const DepartmentPermissionUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema).optional()
}).strict();
