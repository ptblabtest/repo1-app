import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeSumAggregateInputType, Prisma.StageTypeSumAggregateInputType> = z.object({
  order: z.literal(true).optional()
}).strict();
export const StageTypeSumAggregateInputObjectZodSchema = z.object({
  order: z.literal(true).optional()
}).strict();
