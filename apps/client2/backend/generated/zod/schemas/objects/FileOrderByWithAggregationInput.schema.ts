import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FileCountOrderByAggregateInputObjectSchema } from './FileCountOrderByAggregateInput.schema';
import { FileAvgOrderByAggregateInputObjectSchema } from './FileAvgOrderByAggregateInput.schema';
import { FileMaxOrderByAggregateInputObjectSchema } from './FileMaxOrderByAggregateInput.schema';
import { FileMinOrderByAggregateInputObjectSchema } from './FileMinOrderByAggregateInput.schema';
import { FileSumOrderByAggregateInputObjectSchema } from './FileSumOrderByAggregateInput.schema'

export const FileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FileOrderByWithAggregationInput, Prisma.FileOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  filename: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  mimeType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => FileCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FileAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FileMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FileSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FileOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  filename: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  mimeType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => FileCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FileAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FileMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FileSumOrderByAggregateInputObjectSchema).optional()
}).strict();
