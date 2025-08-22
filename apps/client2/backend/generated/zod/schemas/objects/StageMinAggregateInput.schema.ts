import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageMinAggregateInputObjectSchema: z.ZodType<Prisma.StageMinAggregateInputType, Prisma.StageMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  stageTypeId: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional()
}).strict();
export const StageMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  stageTypeId: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional()
}).strict();
