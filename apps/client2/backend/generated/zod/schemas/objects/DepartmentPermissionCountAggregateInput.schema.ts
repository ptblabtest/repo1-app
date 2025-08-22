import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionCountAggregateInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCountAggregateInputType, Prisma.DepartmentPermissionCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  departmentId: z.literal(true).optional(),
  permissionId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DepartmentPermissionCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  departmentId: z.literal(true).optional(),
  permissionId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
