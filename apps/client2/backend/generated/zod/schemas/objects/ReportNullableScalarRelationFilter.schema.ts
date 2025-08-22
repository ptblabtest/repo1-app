import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

export const ReportNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportNullableScalarRelationFilter, Prisma.ReportNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ReportWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => ReportWhereInputObjectSchema).nullish()
}).strict();
export const ReportNullableScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => ReportWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => ReportWhereInputObjectSchema).nullish()
}).strict();
