import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const StageTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeAvgOrderByAggregateInput, Prisma.StageTypeAvgOrderByAggregateInput> = z.object({
  order: SortOrderSchema.optional()
}).strict();
export const StageTypeAvgOrderByAggregateInputObjectZodSchema = z.object({
  order: SortOrderSchema.optional()
}).strict();
