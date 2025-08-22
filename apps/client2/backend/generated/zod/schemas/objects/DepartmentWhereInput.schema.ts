import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { DepartmentPermissionListRelationFilterObjectSchema } from './DepartmentPermissionListRelationFilter.schema'

export const DepartmentWhereInputObjectSchema: z.ZodType<Prisma.DepartmentWhereInput, Prisma.DepartmentWhereInput> = z.object({
  AND: z.union([z.lazy(() => DepartmentWhereInputObjectSchema), z.lazy(() => DepartmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentWhereInputObjectSchema), z.lazy(() => DepartmentWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionListRelationFilterObjectSchema).optional()
}).strict();
export const DepartmentWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => DepartmentWhereInputObjectSchema), z.lazy(() => DepartmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DepartmentWhereInputObjectSchema), z.lazy(() => DepartmentWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionListRelationFilterObjectSchema).optional()
}).strict();
