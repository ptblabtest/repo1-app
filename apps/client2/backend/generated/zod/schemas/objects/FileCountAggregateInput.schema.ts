import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const FileCountAggregateInputObjectSchema: z.ZodType<Prisma.FileCountAggregateInputType, Prisma.FileCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  filename: z.literal(true).optional(),
  path: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  size: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FileCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  filename: z.literal(true).optional(),
  path: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  size: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
