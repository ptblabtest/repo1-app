import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const StageTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeMinOrderByAggregateInput, Prisma.StageTypeMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional()
}).strict();
export const StageTypeMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional()
}).strict();
