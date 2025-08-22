import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StageTypeScalarRelationFilterObjectSchema } from './StageTypeScalarRelationFilter.schema';
import { StageTypeWhereInputObjectSchema } from './StageTypeWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ReportNullableScalarRelationFilterObjectSchema } from './ReportNullableScalarRelationFilter.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

export const StageWhereInputObjectSchema: z.ZodType<Prisma.StageWhereInput, Prisma.StageWhereInput> = z.object({
  AND: z.union([z.lazy(() => StageWhereInputObjectSchema), z.lazy(() => StageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageWhereInputObjectSchema), z.lazy(() => StageWhereInputObjectSchema).array()]).optional(),
  stageTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  comment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  type: z.union([z.lazy(() => StageTypeScalarRelationFilterObjectSchema), z.lazy(() => StageTypeWhereInputObjectSchema)]).optional(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  report: z.union([z.lazy(() => ReportNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportWhereInputObjectSchema)]).nullish()
}).strict();
export const StageWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => StageWhereInputObjectSchema), z.lazy(() => StageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageWhereInputObjectSchema), z.lazy(() => StageWhereInputObjectSchema).array()]).optional(),
  stageTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  comment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  type: z.union([z.lazy(() => StageTypeScalarRelationFilterObjectSchema), z.lazy(() => StageTypeWhereInputObjectSchema)]).optional(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  report: z.union([z.lazy(() => ReportNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportWhereInputObjectSchema)]).nullish()
}).strict();
