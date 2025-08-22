import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportCategoryOrderByWithRelationInputObjectSchema } from './ReportCategoryOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { NoteOrderByRelationAggregateInputObjectSchema } from './NoteOrderByRelationAggregateInput.schema';
import { StageOrderByRelationAggregateInputObjectSchema } from './StageOrderByRelationAggregateInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema'

export const ReportOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportOrderByWithRelationInput, Prisma.ReportOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  periodYear: SortOrderSchema.optional(),
  periodMonth: SortOrderSchema.optional(),
  periodDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  organizationId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category: z.lazy(() => ReportCategoryOrderByWithRelationInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  notes: z.lazy(() => NoteOrderByRelationAggregateInputObjectSchema).optional(),
  stages: z.lazy(() => StageOrderByRelationAggregateInputObjectSchema).optional(),
  files: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ReportOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  periodYear: SortOrderSchema.optional(),
  periodMonth: SortOrderSchema.optional(),
  periodDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  organizationId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category: z.lazy(() => ReportCategoryOrderByWithRelationInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  notes: z.lazy(() => NoteOrderByRelationAggregateInputObjectSchema).optional(),
  stages: z.lazy(() => StageOrderByRelationAggregateInputObjectSchema).optional(),
  files: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
