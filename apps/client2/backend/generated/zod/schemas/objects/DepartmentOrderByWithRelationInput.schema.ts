import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { DepartmentPermissionOrderByRelationAggregateInputObjectSchema } from './DepartmentPermissionOrderByRelationAggregateInput.schema'

export const DepartmentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DepartmentOrderByWithRelationInput, Prisma.DepartmentOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DepartmentOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
