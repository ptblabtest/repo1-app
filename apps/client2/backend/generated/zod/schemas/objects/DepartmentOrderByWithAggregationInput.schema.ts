import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DepartmentCountOrderByAggregateInputObjectSchema } from './DepartmentCountOrderByAggregateInput.schema';
import { DepartmentMaxOrderByAggregateInputObjectSchema } from './DepartmentMaxOrderByAggregateInput.schema';
import { DepartmentMinOrderByAggregateInputObjectSchema } from './DepartmentMinOrderByAggregateInput.schema'

export const DepartmentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DepartmentOrderByWithAggregationInput, Prisma.DepartmentOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => DepartmentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DepartmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DepartmentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DepartmentOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => DepartmentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DepartmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DepartmentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
