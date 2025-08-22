import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DepartmentPermissionListRelationFilterObjectSchema } from './DepartmentPermissionListRelationFilter.schema';
import { UserPermissionListRelationFilterObjectSchema } from './UserPermissionListRelationFilter.schema'

export const PermissionWhereInputObjectSchema: z.ZodType<Prisma.PermissionWhereInput, Prisma.PermissionWhereInput> = z.object({
  AND: z.union([z.lazy(() => PermissionWhereInputObjectSchema), z.lazy(() => PermissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PermissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PermissionWhereInputObjectSchema), z.lazy(() => PermissionWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  dept: z.lazy(() => DepartmentPermissionListRelationFilterObjectSchema).optional(),
  users: z.lazy(() => UserPermissionListRelationFilterObjectSchema).optional()
}).strict();
export const PermissionWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => PermissionWhereInputObjectSchema), z.lazy(() => PermissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PermissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PermissionWhereInputObjectSchema), z.lazy(() => PermissionWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  dept: z.lazy(() => DepartmentPermissionListRelationFilterObjectSchema).optional(),
  users: z.lazy(() => UserPermissionListRelationFilterObjectSchema).optional()
}).strict();
