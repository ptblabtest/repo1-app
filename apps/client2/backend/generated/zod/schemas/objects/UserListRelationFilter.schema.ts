import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserListRelationFilterObjectSchema: z.ZodType<Prisma.UserListRelationFilter, Prisma.UserListRelationFilter> = z.object({
  every: z.lazy(() => UserWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => UserWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
