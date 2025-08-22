import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema'

export const RoleWhereInputObjectSchema: z.ZodType<Prisma.RoleWhereInput, Prisma.RoleWhereInput> = z.object({
  AND: z.union([z.lazy(() => RoleWhereInputObjectSchema), z.lazy(() => RoleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoleWhereInputObjectSchema), z.lazy(() => RoleWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional()
}).strict();
export const RoleWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => RoleWhereInputObjectSchema), z.lazy(() => RoleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoleWhereInputObjectSchema), z.lazy(() => RoleWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional()
}).strict();
