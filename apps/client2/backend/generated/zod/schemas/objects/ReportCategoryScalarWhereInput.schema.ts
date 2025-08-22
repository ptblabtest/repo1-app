import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

export const ReportCategoryScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportCategoryScalarWhereInput, Prisma.ReportCategoryScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  parentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
export const ReportCategoryScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  parentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
