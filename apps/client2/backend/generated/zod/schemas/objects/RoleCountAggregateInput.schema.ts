import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleCountAggregateInputObjectSchema: z.ZodType<Prisma.RoleCountAggregateInputType, Prisma.RoleCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  level: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RoleCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  level: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
