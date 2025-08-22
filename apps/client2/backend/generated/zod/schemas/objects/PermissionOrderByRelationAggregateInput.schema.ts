import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const PermissionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PermissionOrderByRelationAggregateInput, Prisma.PermissionOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PermissionOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
