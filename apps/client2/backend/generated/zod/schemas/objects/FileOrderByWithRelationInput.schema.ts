import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportOrderByWithRelationInputObjectSchema } from './ReportOrderByWithRelationInput.schema'

export const FileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FileOrderByWithRelationInput, Prisma.FileOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  filename: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  mimeType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FileOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  filename: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  mimeType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reportId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputObjectSchema).optional()
}).strict();
