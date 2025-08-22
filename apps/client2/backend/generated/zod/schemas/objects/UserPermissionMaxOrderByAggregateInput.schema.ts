import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const UserPermissionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserPermissionMaxOrderByAggregateInput, Prisma.UserPermissionMaxOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional()
}).strict();
export const UserPermissionMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional()
}).strict();
