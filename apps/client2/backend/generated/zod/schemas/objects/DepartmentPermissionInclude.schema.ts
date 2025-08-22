import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { DepartmentArgsObjectSchema } from './DepartmentArgs.schema';
import { PermissionArgsObjectSchema } from './PermissionArgs.schema'

export const DepartmentPermissionIncludeObjectSchema: z.ZodType<Prisma.DepartmentPermissionInclude, Prisma.DepartmentPermissionInclude> = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsObjectSchema)]).optional(),
  permission: z.union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)]).optional()
}).strict();
export const DepartmentPermissionIncludeObjectZodSchema = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsObjectSchema)]).optional(),
  permission: z.union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)]).optional()
}).strict();
