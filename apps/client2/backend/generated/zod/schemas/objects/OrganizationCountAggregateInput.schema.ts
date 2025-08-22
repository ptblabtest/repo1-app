import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const OrganizationCountAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationCountAggregateInputType, Prisma.OrganizationCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrganizationCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
