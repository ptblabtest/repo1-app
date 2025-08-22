import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportSelectObjectSchema } from './ReportSelect.schema';
import { ReportIncludeObjectSchema } from './ReportInclude.schema'

export const ReportArgsObjectSchema = z.object({
  select: z.lazy(() => ReportSelectObjectSchema).optional(),
  include: z.lazy(() => ReportIncludeObjectSchema).optional()
}).strict();
export const ReportArgsObjectZodSchema = z.object({
  select: z.lazy(() => ReportSelectObjectSchema).optional(),
  include: z.lazy(() => ReportIncludeObjectSchema).optional()
}).strict();
