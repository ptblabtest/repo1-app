import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DepartmentPermissionCountOrderByAggregateInputObjectSchema } from './DepartmentPermissionCountOrderByAggregateInput.schema';
import { DepartmentPermissionMaxOrderByAggregateInputObjectSchema } from './DepartmentPermissionMaxOrderByAggregateInput.schema';
import { DepartmentPermissionMinOrderByAggregateInputObjectSchema } from './DepartmentPermissionMinOrderByAggregateInput.schema'

export const DepartmentPermissionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionOrderByWithAggregationInput, Prisma.DepartmentPermissionOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  departmentId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => DepartmentPermissionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DepartmentPermissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DepartmentPermissionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DepartmentPermissionOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  departmentId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => DepartmentPermissionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DepartmentPermissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DepartmentPermissionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
