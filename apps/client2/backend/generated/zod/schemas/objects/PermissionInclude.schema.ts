import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { DepartmentPermissionFindManySchema } from '../findManyDepartmentPermission.schema';
import { UserPermissionFindManySchema } from '../findManyUserPermission.schema';
import { PermissionCountOutputTypeArgsObjectSchema } from './PermissionCountOutputTypeArgs.schema'

export const PermissionIncludeObjectSchema: z.ZodType<Prisma.PermissionInclude, Prisma.PermissionInclude> = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  dept: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PermissionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PermissionIncludeObjectZodSchema = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  dept: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PermissionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
