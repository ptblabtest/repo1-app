import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentCountAggregateInputObjectSchema: z.ZodType<Prisma.DepartmentCountAggregateInputType, Prisma.DepartmentCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DepartmentCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
