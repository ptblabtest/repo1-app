import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCountOutputTypeSelectObjectSchema } from './ReportCountOutputTypeSelect.schema'

export const ReportCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => ReportCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ReportCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => ReportCountOutputTypeSelectObjectSchema).optional()
}).strict();
