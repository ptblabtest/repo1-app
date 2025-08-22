import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeAvgAggregateInputType, Prisma.StageTypeAvgAggregateInputType> = z.object({
  order: z.literal(true).optional()
}).strict();
export const StageTypeAvgAggregateInputObjectZodSchema = z.object({
  order: z.literal(true).optional()
}).strict();
