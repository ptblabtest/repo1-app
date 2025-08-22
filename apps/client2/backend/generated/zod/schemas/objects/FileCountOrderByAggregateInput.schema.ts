import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const FileCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileCountOrderByAggregateInput, Prisma.FileCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  filename: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional()
}).strict();
export const FileCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  filename: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional()
}).strict();
