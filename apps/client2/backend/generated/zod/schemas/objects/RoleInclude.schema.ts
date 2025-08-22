import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserFindManySchema } from '../findManyUser.schema';
import { RoleCountOutputTypeArgsObjectSchema } from './RoleCountOutputTypeArgs.schema'

export const RoleIncludeObjectSchema: z.ZodType<Prisma.RoleInclude, Prisma.RoleInclude> = z.object({
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RoleIncludeObjectZodSchema = z.object({
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
