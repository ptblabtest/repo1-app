import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const FileSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileSumOrderByAggregateInput, Prisma.FileSumOrderByAggregateInput> = z.object({
  size: SortOrderSchema.optional()
}).strict();
export const FileSumOrderByAggregateInputObjectZodSchema = z.object({
  size: SortOrderSchema.optional()
}).strict();
