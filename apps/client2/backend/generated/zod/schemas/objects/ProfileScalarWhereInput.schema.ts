import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

export const ProfileScalarWhereInputObjectSchema: z.ZodType<Prisma.ProfileScalarWhereInput, Prisma.ProfileScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => ProfileScalarWhereInputObjectSchema), z.lazy(() => ProfileScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileScalarWhereInputObjectSchema), z.lazy(() => ProfileScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  department: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  position: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  joinDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  updatedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ProfileScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => ProfileScalarWhereInputObjectSchema), z.lazy(() => ProfileScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileScalarWhereInputObjectSchema), z.lazy(() => ProfileScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  department: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  position: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  joinDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  updatedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
