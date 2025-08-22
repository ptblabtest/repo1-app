import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SessionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput, Prisma.SessionCountOrderByAggregateInput> = z.object({
  sid: SortOrderSchema.optional(),
  sess: SortOrderSchema.optional(),
  expire: SortOrderSchema.optional()
}).strict();
export const SessionCountOrderByAggregateInputObjectZodSchema = z.object({
  sid: SortOrderSchema.optional(),
  sess: SortOrderSchema.optional(),
  expire: SortOrderSchema.optional()
}).strict();
