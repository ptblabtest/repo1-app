import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const StageTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeCountOrderByAggregateInput, Prisma.StageTypeCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional()
}).strict();
export const StageTypeCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional()
}).strict();
