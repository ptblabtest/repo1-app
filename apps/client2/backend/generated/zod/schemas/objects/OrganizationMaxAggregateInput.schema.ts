import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const OrganizationMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationMaxAggregateInputType, Prisma.OrganizationMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional()
}).strict();
export const OrganizationMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional()
}).strict();
