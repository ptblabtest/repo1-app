import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { DepartmentPermissionOrderByRelationAggregateInputObjectSchema } from './DepartmentPermissionOrderByRelationAggregateInput.schema';
import { UserPermissionOrderByRelationAggregateInputObjectSchema } from './UserPermissionOrderByRelationAggregateInput.schema'

export const PermissionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PermissionOrderByWithRelationInput, Prisma.PermissionOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PermissionOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
