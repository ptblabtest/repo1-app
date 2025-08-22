import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleMinAggregateInputObjectSchema: z.ZodType<Prisma.RoleMinAggregateInputType, Prisma.RoleMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  level: z.literal(true).optional()
}).strict();
export const RoleMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  level: z.literal(true).optional()
}).strict();
