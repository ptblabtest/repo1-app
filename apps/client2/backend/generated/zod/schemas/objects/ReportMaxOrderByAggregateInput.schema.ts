import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ReportMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportMaxOrderByAggregateInput, Prisma.ReportMaxOrderByAggregateInput> = z.object({
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
export const ReportMaxOrderByAggregateInputObjectZodSchema = z.object({
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
