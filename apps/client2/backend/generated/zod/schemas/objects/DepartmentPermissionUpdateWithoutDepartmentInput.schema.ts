import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorDepartmentPermissionNestedInput.schema';
import { UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutDeptNestedInput.schema'

export const DepartmentPermissionUpdateWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateWithoutDepartmentInput, Prisma.DepartmentPermissionUpdateWithoutDepartmentInput> = z.object({
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema).optional()
}).strict();
export const DepartmentPermissionUpdateWithoutDepartmentInputObjectZodSchema = z.object({
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema).optional()
}).strict();
