import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'

export const RoleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput, Prisma.RoleOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const RoleOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
