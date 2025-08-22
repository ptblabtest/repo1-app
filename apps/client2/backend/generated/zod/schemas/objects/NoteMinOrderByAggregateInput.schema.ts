import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const NoteMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NoteMinOrderByAggregateInput, Prisma.NoteMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional()
}).strict();
export const NoteMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional()
}).strict();
