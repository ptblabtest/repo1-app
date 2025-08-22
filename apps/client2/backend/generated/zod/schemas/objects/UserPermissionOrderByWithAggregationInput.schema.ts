import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserPermissionCountOrderByAggregateInputObjectSchema } from './UserPermissionCountOrderByAggregateInput.schema';
import { UserPermissionMaxOrderByAggregateInputObjectSchema } from './UserPermissionMaxOrderByAggregateInput.schema';
import { UserPermissionMinOrderByAggregateInputObjectSchema } from './UserPermissionMinOrderByAggregateInput.schema'

export const UserPermissionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserPermissionOrderByWithAggregationInput, Prisma.UserPermissionOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => UserPermissionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserPermissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserPermissionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserPermissionOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => UserPermissionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserPermissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserPermissionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
