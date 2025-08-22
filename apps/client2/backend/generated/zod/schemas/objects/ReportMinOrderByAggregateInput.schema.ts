import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ReportMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportMinOrderByAggregateInput, Prisma.ReportMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  periodYear: SortOrderSchema.optional(),
  periodMonth: SortOrderSchema.optional(),
  periodDate: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional()
}).strict();
export const ReportMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  periodYear: SortOrderSchema.optional(),
  periodMonth: SortOrderSchema.optional(),
  periodDate: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional()
}).strict();
