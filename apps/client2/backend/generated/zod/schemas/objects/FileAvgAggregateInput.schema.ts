import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const FileAvgAggregateInputObjectSchema: z.ZodType<Prisma.FileAvgAggregateInputType, Prisma.FileAvgAggregateInputType> = z.object({
  size: z.literal(true).optional()
}).strict();
export const FileAvgAggregateInputObjectZodSchema = z.object({
  size: z.literal(true).optional()
}).strict();
