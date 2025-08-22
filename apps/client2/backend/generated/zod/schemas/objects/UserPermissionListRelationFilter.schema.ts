import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereInputObjectSchema } from './UserPermissionWhereInput.schema'

export const UserPermissionListRelationFilterObjectSchema: z.ZodType<Prisma.UserPermissionListRelationFilter, Prisma.UserPermissionListRelationFilter> = z.object({
  every: z.lazy(() => UserPermissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserPermissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserPermissionWhereInputObjectSchema).optional()
}).strict();
export const UserPermissionListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => UserPermissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserPermissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserPermissionWhereInputObjectSchema).optional()
}).strict();
