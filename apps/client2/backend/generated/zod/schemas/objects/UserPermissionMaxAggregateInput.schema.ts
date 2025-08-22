import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserPermissionMaxAggregateInputType, Prisma.UserPermissionMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  permissionId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional()
}).strict();
export const UserPermissionMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  permissionId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional()
}).strict();
