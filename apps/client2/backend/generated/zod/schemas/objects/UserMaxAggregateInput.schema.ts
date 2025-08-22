import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxAggregateInputType, Prisma.UserMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  password: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  departmentId: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  roleId: z.literal(true).optional()
}).strict();
export const UserMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  password: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  departmentId: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  roleId: z.literal(true).optional()
}).strict();
