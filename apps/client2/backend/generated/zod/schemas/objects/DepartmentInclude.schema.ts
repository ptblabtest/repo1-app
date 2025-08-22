import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { DepartmentPermissionFindManySchema } from '../findManyDepartmentPermission.schema';
import { DepartmentCountOutputTypeArgsObjectSchema } from './DepartmentCountOutputTypeArgs.schema'

export const DepartmentIncludeObjectSchema: z.ZodType<Prisma.DepartmentInclude, Prisma.DepartmentInclude> = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  permissions: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DepartmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DepartmentIncludeObjectZodSchema = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  permissions: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DepartmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
