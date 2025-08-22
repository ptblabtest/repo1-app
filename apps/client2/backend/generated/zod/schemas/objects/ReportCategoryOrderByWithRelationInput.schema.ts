import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportCategoryOrderByRelationAggregateInputObjectSchema } from './ReportCategoryOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema'

export const ReportCategoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportCategoryOrderByWithRelationInput, Prisma.ReportCategoryOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  parentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryOrderByWithRelationInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryOrderByRelationAggregateInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  reports: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ReportCategoryOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  parentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryOrderByWithRelationInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryOrderByRelationAggregateInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  reports: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
