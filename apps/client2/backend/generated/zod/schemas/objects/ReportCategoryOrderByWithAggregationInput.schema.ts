import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportCategoryCountOrderByAggregateInputObjectSchema } from './ReportCategoryCountOrderByAggregateInput.schema';
import { ReportCategoryMaxOrderByAggregateInputObjectSchema } from './ReportCategoryMaxOrderByAggregateInput.schema';
import { ReportCategoryMinOrderByAggregateInputObjectSchema } from './ReportCategoryMinOrderByAggregateInput.schema'

export const ReportCategoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportCategoryOrderByWithAggregationInput, Prisma.ReportCategoryOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  parentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportCategoryCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportCategoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportCategoryMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportCategoryOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  parentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportCategoryCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportCategoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportCategoryMinOrderByAggregateInputObjectSchema).optional()
}).strict();
