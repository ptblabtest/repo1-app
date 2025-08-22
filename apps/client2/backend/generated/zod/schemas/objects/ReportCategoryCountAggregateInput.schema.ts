import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCategoryCountAggregateInputObjectSchema: z.ZodType<Prisma.ReportCategoryCountAggregateInputType, Prisma.ReportCategoryCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  parentId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ReportCategoryCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  parentId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
