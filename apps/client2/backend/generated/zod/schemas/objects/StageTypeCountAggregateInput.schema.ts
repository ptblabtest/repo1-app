import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.StageTypeCountAggregateInputType, Prisma.StageTypeCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  model: z.literal(true).optional(),
  order: z.literal(true).optional(),
  value: z.literal(true).optional(),
  label: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StageTypeCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  model: z.literal(true).optional(),
  order: z.literal(true).optional(),
  value: z.literal(true).optional(),
  label: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
