import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

export const StageScalarWhereInputObjectSchema: z.ZodType<Prisma.StageScalarWhereInput, Prisma.StageScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  stageTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  comment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  updatedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
export const StageScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  stageTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  comment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  updatedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
