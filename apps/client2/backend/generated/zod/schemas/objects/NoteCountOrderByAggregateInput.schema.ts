import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const NoteCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NoteCountOrderByAggregateInput, Prisma.NoteCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional()
}).strict();
export const NoteCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional()
}).strict();
