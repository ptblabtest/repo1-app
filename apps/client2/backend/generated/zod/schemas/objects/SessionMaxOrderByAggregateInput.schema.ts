import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SessionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput, Prisma.SessionMaxOrderByAggregateInput> = z.object({
  sid: SortOrderSchema.optional(),
  expire: SortOrderSchema.optional()
}).strict();
export const SessionMaxOrderByAggregateInputObjectZodSchema = z.object({
  sid: SortOrderSchema.optional(),
  expire: SortOrderSchema.optional()
}).strict();
