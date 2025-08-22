import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCountOutputTypeSelectObjectSchema } from './ReportCategoryCountOutputTypeSelect.schema'

export const ReportCategoryCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => ReportCategoryCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ReportCategoryCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => ReportCategoryCountOutputTypeSelectObjectSchema).optional()
}).strict();
