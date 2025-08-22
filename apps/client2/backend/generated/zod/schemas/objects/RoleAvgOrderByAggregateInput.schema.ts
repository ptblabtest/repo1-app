import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RoleAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoleAvgOrderByAggregateInput, Prisma.RoleAvgOrderByAggregateInput> = z.object({
  level: SortOrderSchema.optional()
}).strict();
export const RoleAvgOrderByAggregateInputObjectZodSchema = z.object({
  level: SortOrderSchema.optional()
}).strict();
