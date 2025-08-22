import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ReportAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportAvgOrderByAggregateInput, Prisma.ReportAvgOrderByAggregateInput> = z.object({
  version: SortOrderSchema.optional()
}).strict();
export const ReportAvgOrderByAggregateInputObjectZodSchema = z.object({
  version: SortOrderSchema.optional()
}).strict();
