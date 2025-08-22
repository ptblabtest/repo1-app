import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorDepartmentPermissionNestedInput.schema';
import { DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './DepartmentUpdateOneRequiredWithoutPermissionsNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutDeptNestedInput.schema'

export const DepartmentPermissionUpdateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateWithoutUpdatedByInput, Prisma.DepartmentPermissionUpdateWithoutUpdatedByInput> = z.object({
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema).optional()
}).strict();
export const DepartmentPermissionUpdateWithoutUpdatedByInputObjectZodSchema = z.object({
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema).optional()
}).strict();
