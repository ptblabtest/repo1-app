import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RoleSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoleSumOrderByAggregateInput, Prisma.RoleSumOrderByAggregateInput> = z.object({
  level: SortOrderSchema.optional()
}).strict();
export const RoleSumOrderByAggregateInputObjectZodSchema = z.object({
  level: SortOrderSchema.optional()
}).strict();
