import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StageTypeOrderByWithRelationInputObjectSchema } from './StageTypeOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ReportOrderByWithRelationInputObjectSchema } from './ReportOrderByWithRelationInput.schema'

export const StageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StageOrderByWithRelationInput, Prisma.StageOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  stageTypeId: SortOrderSchema.optional(),
  comment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.lazy(() => StageTypeOrderByWithRelationInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const StageOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  stageTypeId: SortOrderSchema.optional(),
  comment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.lazy(() => StageTypeOrderByWithRelationInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputObjectSchema).optional()
}).strict();
