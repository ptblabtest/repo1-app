import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StageCountOrderByAggregateInputObjectSchema } from './StageCountOrderByAggregateInput.schema';
import { StageMaxOrderByAggregateInputObjectSchema } from './StageMaxOrderByAggregateInput.schema';
import { StageMinOrderByAggregateInputObjectSchema } from './StageMinOrderByAggregateInput.schema'

export const StageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StageOrderByWithAggregationInput, Prisma.StageOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  stageTypeId: SortOrderSchema.optional(),
  comment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => StageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StageOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  stageTypeId: SortOrderSchema.optional(),
  comment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => StageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
