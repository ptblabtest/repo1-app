import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { DepartmentPermissionFindManySchema } from '../findManyDepartmentPermission.schema';
import { DepartmentCountOutputTypeArgsObjectSchema } from './DepartmentCountOutputTypeArgs.schema'

export const DepartmentSelectObjectSchema: z.ZodType<Prisma.DepartmentSelect, Prisma.DepartmentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  permissions: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DepartmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DepartmentSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  permissions: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DepartmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
