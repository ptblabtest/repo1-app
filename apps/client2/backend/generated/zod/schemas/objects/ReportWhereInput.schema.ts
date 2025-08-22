import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ReportCategoryScalarRelationFilterObjectSchema } from './ReportCategoryScalarRelationFilter.schema';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrganizationNullableScalarRelationFilterObjectSchema } from './OrganizationNullableScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { NoteListRelationFilterObjectSchema } from './NoteListRelationFilter.schema';
import { StageListRelationFilterObjectSchema } from './StageListRelationFilter.schema';
import { FileListRelationFilterObjectSchema } from './FileListRelationFilter.schema'

export const ReportWhereInputObjectSchema: z.ZodType<Prisma.ReportWhereInput, Prisma.ReportWhereInput> = z.object({
  AND: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  categoryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodYear: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodMonth: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodDate: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  version: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  category: z.union([z.lazy(() => ReportCategoryScalarRelationFilterObjectSchema), z.lazy(() => ReportCategoryWhereInputObjectSchema)]).optional(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  organization: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).nullish(),
  notes: z.lazy(() => NoteListRelationFilterObjectSchema).optional(),
  stages: z.lazy(() => StageListRelationFilterObjectSchema).optional(),
  files: z.lazy(() => FileListRelationFilterObjectSchema).optional()
}).strict();
export const ReportWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  categoryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodYear: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodMonth: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodDate: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  version: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  category: z.union([z.lazy(() => ReportCategoryScalarRelationFilterObjectSchema), z.lazy(() => ReportCategoryWhereInputObjectSchema)]).optional(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  organization: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).nullish(),
  notes: z.lazy(() => NoteListRelationFilterObjectSchema).optional(),
  stages: z.lazy(() => StageListRelationFilterObjectSchema).optional(),
  files: z.lazy(() => FileListRelationFilterObjectSchema).optional()
}).strict();
