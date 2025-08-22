import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const StageTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeSumOrderByAggregateInput, Prisma.StageTypeSumOrderByAggregateInput> = z.object({
  order: SortOrderSchema.optional()
}).strict();
export const StageTypeSumOrderByAggregateInputObjectZodSchema = z.object({
  order: SortOrderSchema.optional()
}).strict();
