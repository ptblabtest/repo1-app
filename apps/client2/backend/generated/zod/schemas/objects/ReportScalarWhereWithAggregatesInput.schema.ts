import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

export const ReportScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReportScalarWhereWithAggregatesInput, Prisma.ReportScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  categoryId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  periodYear: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  periodMonth: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  periodDate: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  version: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  organizationId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
export const ReportScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  categoryId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  periodYear: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  periodMonth: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  periodDate: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  version: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  organizationId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
