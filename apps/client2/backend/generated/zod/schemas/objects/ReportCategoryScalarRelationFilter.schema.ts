import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema'

export const ReportCategoryScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportCategoryScalarRelationFilter, Prisma.ReportCategoryScalarRelationFilter> = z.object({
  is: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional()
}).strict();
export const ReportCategoryScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional()
}).strict();
