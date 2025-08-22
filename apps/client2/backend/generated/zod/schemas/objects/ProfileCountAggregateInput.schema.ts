import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ProfileCountAggregateInputObjectSchema: z.ZodType<Prisma.ProfileCountAggregateInputType, Prisma.ProfileCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  department: z.literal(true).optional(),
  position: z.literal(true).optional(),
  joinDate: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProfileCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  department: z.literal(true).optional(),
  position: z.literal(true).optional(),
  joinDate: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
