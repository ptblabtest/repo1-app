import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const StageTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeMaxOrderByAggregateInput, Prisma.StageTypeMaxOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional()
}).strict();
export const StageTypeMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional()
}).strict();
