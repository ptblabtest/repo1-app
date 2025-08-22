import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const PermissionCountAggregateInputObjectSchema: z.ZodType<Prisma.PermissionCountAggregateInputType, Prisma.PermissionCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  resource: z.literal(true).optional(),
  action: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PermissionCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  resource: z.literal(true).optional(),
  action: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
