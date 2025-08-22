import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

export const UserPermissionScalarWhereInputObjectSchema: z.ZodType<Prisma.UserPermissionScalarWhereInput, Prisma.UserPermissionScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
export const UserPermissionScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish()
}).strict();
