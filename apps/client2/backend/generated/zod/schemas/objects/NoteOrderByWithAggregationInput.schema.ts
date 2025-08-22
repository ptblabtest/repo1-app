import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NoteCountOrderByAggregateInputObjectSchema } from './NoteCountOrderByAggregateInput.schema';
import { NoteMaxOrderByAggregateInputObjectSchema } from './NoteMaxOrderByAggregateInput.schema';
import { NoteMinOrderByAggregateInputObjectSchema } from './NoteMinOrderByAggregateInput.schema'

export const NoteOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NoteOrderByWithAggregationInput, Prisma.NoteOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => NoteCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NoteMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NoteMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NoteOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => NoteCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NoteMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NoteMinOrderByAggregateInputObjectSchema).optional()
}).strict();
