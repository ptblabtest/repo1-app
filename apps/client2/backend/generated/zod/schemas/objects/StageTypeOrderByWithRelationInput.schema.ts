import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StageOrderByRelationAggregateInputObjectSchema } from './StageOrderByRelationAggregateInput.schema'

export const StageTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StageTypeOrderByWithRelationInput, Prisma.StageTypeOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  stages: z.lazy(() => StageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StageTypeOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  stages: z.lazy(() => StageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
