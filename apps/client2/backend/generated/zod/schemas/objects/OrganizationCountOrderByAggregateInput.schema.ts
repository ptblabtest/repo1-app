import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const OrganizationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationCountOrderByAggregateInput, Prisma.OrganizationCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional()
}).strict();
export const OrganizationCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional()
}).strict();
