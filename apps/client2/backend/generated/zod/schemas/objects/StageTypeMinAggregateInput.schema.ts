import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeMinAggregateInputType, Prisma.StageTypeMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  model: z.literal(true).optional(),
  order: z.literal(true).optional(),
  value: z.literal(true).optional(),
  label: z.literal(true).optional()
}).strict();
export const StageTypeMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  model: z.literal(true).optional(),
  order: z.literal(true).optional(),
  value: z.literal(true).optional(),
  label: z.literal(true).optional()
}).strict();
