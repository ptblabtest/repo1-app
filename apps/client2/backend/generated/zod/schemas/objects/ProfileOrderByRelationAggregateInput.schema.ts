import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ProfileOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProfileOrderByRelationAggregateInput, Prisma.ProfileOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProfileOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
