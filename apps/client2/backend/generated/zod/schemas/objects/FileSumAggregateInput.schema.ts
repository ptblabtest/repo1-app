import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const FileSumAggregateInputObjectSchema: z.ZodType<Prisma.FileSumAggregateInputType, Prisma.FileSumAggregateInputType> = z.object({
  size: z.literal(true).optional()
}).strict();
export const FileSumAggregateInputObjectZodSchema = z.object({
  size: z.literal(true).optional()
}).strict();
