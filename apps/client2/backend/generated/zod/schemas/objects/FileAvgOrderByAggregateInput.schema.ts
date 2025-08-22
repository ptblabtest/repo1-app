import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const FileAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileAvgOrderByAggregateInput, Prisma.FileAvgOrderByAggregateInput> = z.object({
  size: SortOrderSchema.optional()
}).strict();
export const FileAvgOrderByAggregateInputObjectZodSchema = z.object({
  size: SortOrderSchema.optional()
}).strict();
