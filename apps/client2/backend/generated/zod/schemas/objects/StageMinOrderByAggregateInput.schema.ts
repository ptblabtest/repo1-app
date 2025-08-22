import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const StageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StageMinOrderByAggregateInput, Prisma.StageMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  stageTypeId: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional()
}).strict();
export const StageMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  stageTypeId: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional()
}).strict();
