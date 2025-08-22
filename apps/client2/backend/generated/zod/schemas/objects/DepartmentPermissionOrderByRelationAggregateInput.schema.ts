import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const DepartmentPermissionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionOrderByRelationAggregateInput, Prisma.DepartmentPermissionOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DepartmentPermissionOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
