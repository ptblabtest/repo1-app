import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const FileMinAggregateInputObjectSchema: z.ZodType<Prisma.FileMinAggregateInputType, Prisma.FileMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  filename: z.literal(true).optional(),
  path: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  size: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional()
}).strict();
export const FileMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  filename: z.literal(true).optional(),
  path: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  size: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional()
}).strict();
