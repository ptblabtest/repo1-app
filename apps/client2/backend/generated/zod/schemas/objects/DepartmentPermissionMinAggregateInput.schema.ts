import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionMinAggregateInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionMinAggregateInputType, Prisma.DepartmentPermissionMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  departmentId: z.literal(true).optional(),
  permissionId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional()
}).strict();
export const DepartmentPermissionMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  departmentId: z.literal(true).optional(),
  permissionId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional()
}).strict();
