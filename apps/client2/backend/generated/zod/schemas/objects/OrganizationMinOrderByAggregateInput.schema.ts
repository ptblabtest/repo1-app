import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const OrganizationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationMinOrderByAggregateInput, Prisma.OrganizationMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional()
}).strict();
export const OrganizationMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional()
}).strict();
