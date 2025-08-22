import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ReportNullableScalarRelationFilterObjectSchema } from './ReportNullableScalarRelationFilter.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

export const FileWhereInputObjectSchema: z.ZodType<Prisma.FileWhereInput, Prisma.FileWhereInput> = z.object({
  AND: z.union([z.lazy(() => FileWhereInputObjectSchema), z.lazy(() => FileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileWhereInputObjectSchema), z.lazy(() => FileWhereInputObjectSchema).array()]).optional(),
  filename: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  path: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mimeType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  size: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  report: z.union([z.lazy(() => ReportNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportWhereInputObjectSchema)]).nullish()
}).strict();
export const FileWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => FileWhereInputObjectSchema), z.lazy(() => FileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileWhereInputObjectSchema), z.lazy(() => FileWhereInputObjectSchema).array()]).optional(),
  filename: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  path: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mimeType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  size: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  report: z.union([z.lazy(() => ReportNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportWhereInputObjectSchema)]).nullish()
}).strict();
