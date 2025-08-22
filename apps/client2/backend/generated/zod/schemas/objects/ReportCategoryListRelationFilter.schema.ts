import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema'

export const ReportCategoryListRelationFilterObjectSchema: z.ZodType<Prisma.ReportCategoryListRelationFilter, Prisma.ReportCategoryListRelationFilter> = z.object({
  every: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional()
}).strict();
export const ReportCategoryListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional()
}).strict();
