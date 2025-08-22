import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

export const ReportScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportScalarWhereInput, Prisma.ReportScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodYear: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodMonth: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodDate: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  version: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
export const ReportScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodYear: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodMonth: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodDate: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  version: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
