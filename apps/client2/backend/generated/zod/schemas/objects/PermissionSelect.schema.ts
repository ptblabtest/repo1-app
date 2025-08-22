import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { DepartmentPermissionFindManySchema } from '../findManyDepartmentPermission.schema';
import { UserPermissionFindManySchema } from '../findManyUserPermission.schema';
import { PermissionCountOutputTypeArgsObjectSchema } from './PermissionCountOutputTypeArgs.schema'

export const PermissionSelectObjectSchema: z.ZodType<Prisma.PermissionSelect, Prisma.PermissionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  resource: z.boolean().optional(),
  action: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  dept: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PermissionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PermissionSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  resource: z.boolean().optional(),
  action: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  dept: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PermissionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
