import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleMaxAggregateInputObjectSchema: z.ZodType<Prisma.RoleMaxAggregateInputType, Prisma.RoleMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  level: z.literal(true).optional()
}).strict();
export const RoleMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  level: z.literal(true).optional()
}).strict();
