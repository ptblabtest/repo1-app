import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportSumAggregateInputObjectSchema: z.ZodType<Prisma.ReportSumAggregateInputType, Prisma.ReportSumAggregateInputType> = z.object({
  version: z.literal(true).optional()
}).strict();
export const ReportSumAggregateInputObjectZodSchema = z.object({
  version: z.literal(true).optional()
}).strict();
