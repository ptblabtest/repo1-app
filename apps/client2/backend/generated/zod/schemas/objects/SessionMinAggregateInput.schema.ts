import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const SessionMinAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinAggregateInputType, Prisma.SessionMinAggregateInputType> = z.object({
  sid: z.literal(true).optional(),
  expire: z.literal(true).optional()
}).strict();
export const SessionMinAggregateInputObjectZodSchema = z.object({
  sid: z.literal(true).optional(),
  expire: z.literal(true).optional()
}).strict();
