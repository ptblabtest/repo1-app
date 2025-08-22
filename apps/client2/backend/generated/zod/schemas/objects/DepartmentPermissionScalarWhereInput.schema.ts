import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

export const DepartmentPermissionScalarWhereInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionScalarWhereInput, Prisma.DepartmentPermissionScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  departmentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
export const DepartmentPermissionScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  departmentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
