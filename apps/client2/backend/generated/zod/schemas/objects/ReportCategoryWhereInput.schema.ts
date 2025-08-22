import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ReportCategoryNullableScalarRelationFilterObjectSchema } from './ReportCategoryNullableScalarRelationFilter.schema';
import { ReportCategoryListRelationFilterObjectSchema } from './ReportCategoryListRelationFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema'

export const ReportCategoryWhereInputObjectSchema: z.ZodType<Prisma.ReportCategoryWhereInput, Prisma.ReportCategoryWhereInput> = z.object({
  AND: z.union([z.lazy(() => ReportCategoryWhereInputObjectSchema), z.lazy(() => ReportCategoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportCategoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportCategoryWhereInputObjectSchema), z.lazy(() => ReportCategoryWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  parentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  parent: z.union([z.lazy(() => ReportCategoryNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportCategoryWhereInputObjectSchema)]).nullish(),
  children: z.lazy(() => ReportCategoryListRelationFilterObjectSchema).optional(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  reports: z.lazy(() => ReportListRelationFilterObjectSchema).optional()
}).strict();
export const ReportCategoryWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => ReportCategoryWhereInputObjectSchema), z.lazy(() => ReportCategoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportCategoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportCategoryWhereInputObjectSchema), z.lazy(() => ReportCategoryWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  parentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  parent: z.union([z.lazy(() => ReportCategoryNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportCategoryWhereInputObjectSchema)]).nullish(),
  children: z.lazy(() => ReportCategoryListRelationFilterObjectSchema).optional(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  reports: z.lazy(() => ReportListRelationFilterObjectSchema).optional()
}).strict();
