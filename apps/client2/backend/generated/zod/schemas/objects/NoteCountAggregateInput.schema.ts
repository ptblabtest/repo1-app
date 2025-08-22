import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteCountAggregateInputObjectSchema: z.ZodType<Prisma.NoteCountAggregateInputType, Prisma.NoteCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  reportId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const NoteCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  reportId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
