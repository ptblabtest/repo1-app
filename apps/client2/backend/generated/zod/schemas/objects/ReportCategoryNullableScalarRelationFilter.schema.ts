import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema'

export const ReportCategoryNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportCategoryNullableScalarRelationFilter, Prisma.ReportCategoryNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ReportCategoryWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => ReportCategoryWhereInputObjectSchema).nullish()
}).strict();
export const ReportCategoryNullableScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => ReportCategoryWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => ReportCategoryWhereInputObjectSchema).nullish()
}).strict();
