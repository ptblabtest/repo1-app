import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DepartmentScalarRelationFilterObjectSchema } from './DepartmentScalarRelationFilter.schema';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema';
import { PermissionScalarRelationFilterObjectSchema } from './PermissionScalarRelationFilter.schema';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema'

export const DepartmentPermissionWhereInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionWhereInput, Prisma.DepartmentPermissionWhereInput> = z.object({
  AND: z.union([z.lazy(() => DepartmentPermissionWhereInputObjectSchema), z.lazy(() => DepartmentPermissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentPermissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentPermissionWhereInputObjectSchema), z.lazy(() => DepartmentPermissionWhereInputObjectSchema).array()]).optional(),
  departmentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  department: z.union([z.lazy(() => DepartmentScalarRelationFilterObjectSchema), z.lazy(() => DepartmentWhereInputObjectSchema)]).optional(),
  permission: z.union([z.lazy(() => PermissionScalarRelationFilterObjectSchema), z.lazy(() => PermissionWhereInputObjectSchema)]).optional()
}).strict();
export const DepartmentPermissionWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => DepartmentPermissionWhereInputObjectSchema), z.lazy(() => DepartmentPermissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentPermissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentPermissionWhereInputObjectSchema), z.lazy(() => DepartmentPermissionWhereInputObjectSchema).array()]).optional(),
  departmentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  department: z.union([z.lazy(() => DepartmentScalarRelationFilterObjectSchema), z.lazy(() => DepartmentWhereInputObjectSchema)]).optional(),
  permission: z.union([z.lazy(() => PermissionScalarRelationFilterObjectSchema), z.lazy(() => PermissionWhereInputObjectSchema)]).optional()
}).strict();
