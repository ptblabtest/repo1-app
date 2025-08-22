import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const DepartmentPermissionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCountOrderByAggregateInput, Prisma.DepartmentPermissionCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  departmentId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional()
}).strict();
export const DepartmentPermissionCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  departmentId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional()
}).strict();
