import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ReportCategoryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReportCategoryOrderByRelationAggregateInput, Prisma.ReportCategoryOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReportCategoryOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
