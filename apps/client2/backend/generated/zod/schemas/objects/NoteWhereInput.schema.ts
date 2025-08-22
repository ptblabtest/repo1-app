import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ReportNullableScalarRelationFilterObjectSchema } from './ReportNullableScalarRelationFilter.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

export const NoteWhereInputObjectSchema: z.ZodType<Prisma.NoteWhereInput, Prisma.NoteWhereInput> = z.object({
  AND: z.union([z.lazy(() => NoteWhereInputObjectSchema), z.lazy(() => NoteWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NoteWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteWhereInputObjectSchema), z.lazy(() => NoteWhereInputObjectSchema).array()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  report: z.union([z.lazy(() => ReportNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportWhereInputObjectSchema)]).nullish()
}).strict();
export const NoteWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => NoteWhereInputObjectSchema), z.lazy(() => NoteWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NoteWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteWhereInputObjectSchema), z.lazy(() => NoteWhereInputObjectSchema).array()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  report: z.union([z.lazy(() => ReportNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportWhereInputObjectSchema)]).nullish()
}).strict();
