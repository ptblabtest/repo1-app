import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ReportSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportSumOrderByAggregateInput, Prisma.ReportSumOrderByAggregateInput> = z.object({
  version: SortOrderSchema.optional()
}).strict();
export const ReportSumOrderByAggregateInputObjectZodSchema = z.object({
  version: SortOrderSchema.optional()
}).strict();
