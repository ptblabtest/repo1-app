import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { DepartmentArgsObjectSchema } from './DepartmentArgs.schema';
import { PermissionArgsObjectSchema } from './PermissionArgs.schema'

export const DepartmentPermissionSelectObjectSchema: z.ZodType<Prisma.DepartmentPermissionSelect, Prisma.DepartmentPermissionSelect> = z.object({
  id: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsObjectSchema)]).optional(),
  permission: z.union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)]).optional()
}).strict();
export const DepartmentPermissionSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsObjectSchema)]).optional(),
  permission: z.union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)]).optional()
}).strict();
