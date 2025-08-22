import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

export const NoteScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NoteScalarWhereWithAggregatesInput, Prisma.NoteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
export const NoteScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NoteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  reportId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
