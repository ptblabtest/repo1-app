import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserCountAggregateInputObjectSchema: z.ZodType<Prisma.UserCountAggregateInputType, Prisma.UserCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  password: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  departmentId: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  roleId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  password: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  departmentId: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  roleId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
