import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { DepartmentOrderByWithRelationInputObjectSchema } from './DepartmentOrderByWithRelationInput.schema';
import { PermissionOrderByWithRelationInputObjectSchema } from './PermissionOrderByWithRelationInput.schema'

export const DepartmentPermissionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionOrderByWithRelationInput, Prisma.DepartmentPermissionOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  departmentId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DepartmentPermissionOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  departmentId: SortOrderSchema.optional(),
  permissionId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputObjectSchema).optional(),
  permission: z.lazy(() => PermissionOrderByWithRelationInputObjectSchema).optional()
}).strict();
