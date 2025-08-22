import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCountAggregateInputObjectSchema: z.ZodType<Prisma.ReportCountAggregateInputType, Prisma.ReportCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  periodYear: z.literal(true).optional(),
  periodMonth: z.literal(true).optional(),
  periodDate: z.literal(true).optional(),
  version: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ReportCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  periodYear: z.literal(true).optional(),
  periodMonth: z.literal(true).optional(),
  periodDate: z.literal(true).optional(),
  version: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
