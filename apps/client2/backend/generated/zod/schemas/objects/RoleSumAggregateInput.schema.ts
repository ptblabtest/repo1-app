import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleSumAggregateInputObjectSchema: z.ZodType<Prisma.RoleSumAggregateInputType, Prisma.RoleSumAggregateInputType> = z.object({
  level: z.literal(true).optional()
}).strict();
export const RoleSumAggregateInputObjectZodSchema = z.object({
  level: z.literal(true).optional()
}).strict();
