import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionSelectObjectSchema } from './DepartmentPermissionSelect.schema';
import { DepartmentPermissionIncludeObjectSchema } from './DepartmentPermissionInclude.schema'

export const DepartmentPermissionArgsObjectSchema = z.object({
  select: z.lazy(() => DepartmentPermissionSelectObjectSchema).optional(),
  include: z.lazy(() => DepartmentPermissionIncludeObjectSchema).optional()
}).strict();
export const DepartmentPermissionArgsObjectZodSchema = z.object({
  select: z.lazy(() => DepartmentPermissionSelectObjectSchema).optional(),
  include: z.lazy(() => DepartmentPermissionIncludeObjectSchema).optional()
}).strict();
