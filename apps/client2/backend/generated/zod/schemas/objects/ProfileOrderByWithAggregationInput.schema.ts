import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileCountOrderByAggregateInputObjectSchema } from './ProfileCountOrderByAggregateInput.schema';
import { ProfileMaxOrderByAggregateInputObjectSchema } from './ProfileMaxOrderByAggregateInput.schema';
import { ProfileMinOrderByAggregateInputObjectSchema } from './ProfileMinOrderByAggregateInput.schema'

export const ProfileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput, Prisma.ProfileOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  department: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  position: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  joinDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => ProfileCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProfileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProfileMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProfileOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  department: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  position: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  joinDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => ProfileCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProfileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProfileMinOrderByAggregateInputObjectSchema).optional()
}).strict();
