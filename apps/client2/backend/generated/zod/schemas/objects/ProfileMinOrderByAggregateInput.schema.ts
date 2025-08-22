import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ProfileMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMinOrderByAggregateInput, Prisma.ProfileMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  department: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  joinDate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const ProfileMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  department: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  joinDate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
