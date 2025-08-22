import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

export const DepartmentScalarWhereInputObjectSchema: z.ZodType<Prisma.DepartmentScalarWhereInput, Prisma.DepartmentScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => DepartmentScalarWhereInputObjectSchema), z.lazy(() => DepartmentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentScalarWhereInputObjectSchema), z.lazy(() => DepartmentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
export const DepartmentScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => DepartmentScalarWhereInputObjectSchema), z.lazy(() => DepartmentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentScalarWhereInputObjectSchema), z.lazy(() => DepartmentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
