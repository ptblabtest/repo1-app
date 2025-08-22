import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReportAvgAggregateInputType, Prisma.ReportAvgAggregateInputType> = z.object({
  version: z.literal(true).optional()
}).strict();
export const ReportAvgAggregateInputObjectZodSchema = z.object({
  version: z.literal(true).optional()
}).strict();
