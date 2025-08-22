import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

export const NoteScalarWhereInputObjectSchema: z.ZodType<Prisma.NoteScalarWhereInput, Prisma.NoteScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NoteScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  updatedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
export const NoteScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NoteScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  updatedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
