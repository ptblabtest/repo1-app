import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleAvgAggregateInputObjectSchema: z.ZodType<Prisma.RoleAvgAggregateInputType, Prisma.RoleAvgAggregateInputType> = z.object({
  level: z.literal(true).optional()
}).strict();
export const RoleAvgAggregateInputObjectZodSchema = z.object({
  level: z.literal(true).optional()
}).strict();
