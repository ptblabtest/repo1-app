import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const SessionMaxAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxAggregateInputType, Prisma.SessionMaxAggregateInputType> = z.object({
  sid: z.literal(true).optional(),
  expire: z.literal(true).optional()
}).strict();
export const SessionMaxAggregateInputObjectZodSchema = z.object({
  sid: z.literal(true).optional(),
  expire: z.literal(true).optional()
}).strict();
