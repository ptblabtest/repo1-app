import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentSelectObjectSchema } from './DepartmentSelect.schema';
import { DepartmentIncludeObjectSchema } from './DepartmentInclude.schema'

export const DepartmentArgsObjectSchema = z.object({
  select: z.lazy(() => DepartmentSelectObjectSchema).optional(),
  include: z.lazy(() => DepartmentIncludeObjectSchema).optional()
}).strict();
export const DepartmentArgsObjectZodSchema = z.object({
  select: z.lazy(() => DepartmentSelectObjectSchema).optional(),
  include: z.lazy(() => DepartmentIncludeObjectSchema).optional()
}).strict();
