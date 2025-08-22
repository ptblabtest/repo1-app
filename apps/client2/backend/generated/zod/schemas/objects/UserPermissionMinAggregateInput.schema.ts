import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionMinAggregateInputObjectSchema: z.ZodType<Prisma.UserPermissionMinAggregateInputType, Prisma.UserPermissionMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  permissionId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional()
}).strict();
export const UserPermissionMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  permissionId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional()
}).strict();
