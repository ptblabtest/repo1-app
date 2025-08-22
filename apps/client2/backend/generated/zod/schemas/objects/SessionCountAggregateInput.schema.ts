import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const SessionCountAggregateInputObjectSchema: z.ZodType<Prisma.SessionCountAggregateInputType, Prisma.SessionCountAggregateInputType> = z.object({
  sid: z.literal(true).optional(),
  sess: z.literal(true).optional(),
  expire: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SessionCountAggregateInputObjectZodSchema = z.object({
  sid: z.literal(true).optional(),
  sess: z.literal(true).optional(),
  expire: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
