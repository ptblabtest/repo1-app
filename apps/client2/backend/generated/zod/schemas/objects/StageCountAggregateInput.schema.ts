import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageCountAggregateInputObjectSchema: z.ZodType<Prisma.StageCountAggregateInputType, Prisma.StageCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  stageTypeId: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StageCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  stageTypeId: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
