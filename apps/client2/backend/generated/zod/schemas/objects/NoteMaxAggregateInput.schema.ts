import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteMaxAggregateInputObjectSchema: z.ZodType<Prisma.NoteMaxAggregateInputType, Prisma.NoteMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  reportId: z.literal(true).optional()
}).strict();
export const NoteMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  reportId: z.literal(true).optional()
}).strict();
