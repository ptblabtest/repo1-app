import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SessionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput, Prisma.SessionMinOrderByAggregateInput> = z.object({
  sid: SortOrderSchema.optional(),
  expire: SortOrderSchema.optional()
}).strict();
export const SessionMinOrderByAggregateInputObjectZodSchema = z.object({
  sid: SortOrderSchema.optional(),
  expire: SortOrderSchema.optional()
}).strict();
