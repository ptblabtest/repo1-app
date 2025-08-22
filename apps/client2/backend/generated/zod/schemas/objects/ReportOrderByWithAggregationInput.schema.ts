import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportCountOrderByAggregateInputObjectSchema } from './ReportCountOrderByAggregateInput.schema';
import { ReportAvgOrderByAggregateInputObjectSchema } from './ReportAvgOrderByAggregateInput.schema';
import { ReportMaxOrderByAggregateInputObjectSchema } from './ReportMaxOrderByAggregateInput.schema';
import { ReportMinOrderByAggregateInputObjectSchema } from './ReportMinOrderByAggregateInput.schema';
import { ReportSumOrderByAggregateInputObjectSchema } from './ReportSumOrderByAggregateInput.schema'

export const ReportOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportOrderByWithAggregationInput, Prisma.ReportOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  periodYear: SortOrderSchema.optional(),
  periodMonth: SortOrderSchema.optional(),
  periodDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  organizationId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  periodYear: SortOrderSchema.optional(),
  periodMonth: SortOrderSchema.optional(),
  periodDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  organizationId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportSumOrderByAggregateInputObjectSchema).optional()
}).strict();
