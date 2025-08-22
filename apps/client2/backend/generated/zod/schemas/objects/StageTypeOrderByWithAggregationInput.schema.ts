import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StageTypeCountOrderByAggregateInputObjectSchema } from './StageTypeCountOrderByAggregateInput.schema';
import { StageTypeAvgOrderByAggregateInputObjectSchema } from './StageTypeAvgOrderByAggregateInput.schema';
import { StageTypeMaxOrderByAggregateInputObjectSchema } from './StageTypeMaxOrderByAggregateInput.schema';
import { StageTypeMinOrderByAggregateInputObjectSchema } from './StageTypeMinOrderByAggregateInput.schema';
import { StageTypeSumOrderByAggregateInputObjectSchema } from './StageTypeSumOrderByAggregateInput.schema'

export const StageTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StageTypeOrderByWithAggregationInput, Prisma.StageTypeOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  _count: z.lazy(() => StageTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StageTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StageTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StageTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StageTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StageTypeOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  _count: z.lazy(() => StageTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StageTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StageTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StageTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StageTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
