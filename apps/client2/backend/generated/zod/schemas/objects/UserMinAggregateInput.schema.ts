import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserMinAggregateInputObjectSchema: z.ZodType<Prisma.UserMinAggregateInputType, Prisma.UserMinAggregateInputType> = z.object({
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
export const UserMinAggregateInputObjectZodSchema = z.object({
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
