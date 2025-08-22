import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

export const StageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StageScalarWhereWithAggregatesInput, Prisma.StageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  stageTypeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  comment: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
export const StageScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  stageTypeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  comment: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
