import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const OrganizationMinAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationMinAggregateInputType, Prisma.OrganizationMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional()
}).strict();
export const OrganizationMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional()
}).strict();
