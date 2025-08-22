import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleCountOrderByAggregateInputObjectSchema } from './RoleCountOrderByAggregateInput.schema';
import { RoleAvgOrderByAggregateInputObjectSchema } from './RoleAvgOrderByAggregateInput.schema';
import { RoleMaxOrderByAggregateInputObjectSchema } from './RoleMaxOrderByAggregateInput.schema';
import { RoleMinOrderByAggregateInputObjectSchema } from './RoleMinOrderByAggregateInput.schema';
import { RoleSumOrderByAggregateInputObjectSchema } from './RoleSumOrderByAggregateInput.schema'

export const RoleOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RoleOrderByWithAggregationInput, Prisma.RoleOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  _count: z.lazy(() => RoleCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RoleAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RoleMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RoleMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RoleSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RoleOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  _count: z.lazy(() => RoleCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RoleAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RoleMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RoleMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RoleSumOrderByAggregateInputObjectSchema).optional()
}).strict();
