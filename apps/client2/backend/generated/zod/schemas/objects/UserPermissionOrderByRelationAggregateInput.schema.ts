import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const UserPermissionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.UserPermissionOrderByRelationAggregateInput, Prisma.UserPermissionOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const UserPermissionOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
