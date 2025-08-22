import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentMaxAggregateInputObjectSchema: z.ZodType<Prisma.DepartmentMaxAggregateInputType, Prisma.DepartmentMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional()
}).strict();
export const DepartmentMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional()
}).strict();
