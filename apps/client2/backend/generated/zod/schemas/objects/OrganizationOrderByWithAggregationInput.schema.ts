import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrganizationCountOrderByAggregateInputObjectSchema } from './OrganizationCountOrderByAggregateInput.schema';
import { OrganizationMaxOrderByAggregateInputObjectSchema } from './OrganizationMaxOrderByAggregateInput.schema';
import { OrganizationMinOrderByAggregateInputObjectSchema } from './OrganizationMinOrderByAggregateInput.schema'

export const OrganizationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrganizationOrderByWithAggregationInput, Prisma.OrganizationOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  _count: z.lazy(() => OrganizationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrganizationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrganizationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrganizationOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  _count: z.lazy(() => OrganizationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrganizationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrganizationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
