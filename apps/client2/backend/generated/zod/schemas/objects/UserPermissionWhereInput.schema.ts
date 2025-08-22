import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { PermissionScalarRelationFilterObjectSchema } from './PermissionScalarRelationFilter.schema';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema'

export const UserPermissionWhereInputObjectSchema: z.ZodType<Prisma.UserPermissionWhereInput, Prisma.UserPermissionWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserPermissionWhereInputObjectSchema), z.lazy(() => UserPermissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserPermissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserPermissionWhereInputObjectSchema), z.lazy(() => UserPermissionWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  permission: z.union([z.lazy(() => PermissionScalarRelationFilterObjectSchema), z.lazy(() => PermissionWhereInputObjectSchema)]).optional(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish()
}).strict();
export const UserPermissionWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => UserPermissionWhereInputObjectSchema), z.lazy(() => UserPermissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserPermissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserPermissionWhereInputObjectSchema), z.lazy(() => UserPermissionWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  permission: z.union([z.lazy(() => PermissionScalarRelationFilterObjectSchema), z.lazy(() => PermissionWhereInputObjectSchema)]).optional(),
  createdBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish(),
  updatedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).nullish()
}).strict();
