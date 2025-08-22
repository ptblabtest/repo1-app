import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

export const DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionScalarWhereWithAggregatesInput, Prisma.DepartmentPermissionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  departmentId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
export const DepartmentPermissionScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  departmentId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
