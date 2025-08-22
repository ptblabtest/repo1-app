import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategorySelectObjectSchema } from './ReportCategorySelect.schema';
import { ReportCategoryIncludeObjectSchema } from './ReportCategoryInclude.schema'

export const ReportCategoryArgsObjectSchema = z.object({
  select: z.lazy(() => ReportCategorySelectObjectSchema).optional(),
  include: z.lazy(() => ReportCategoryIncludeObjectSchema).optional()
}).strict();
export const ReportCategoryArgsObjectZodSchema = z.object({
  select: z.lazy(() => ReportCategorySelectObjectSchema).optional(),
  include: z.lazy(() => ReportCategoryIncludeObjectSchema).optional()
}).strict();
