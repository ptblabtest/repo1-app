import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionSelectObjectSchema } from './UserPermissionSelect.schema';
import { UserPermissionIncludeObjectSchema } from './UserPermissionInclude.schema'

export const UserPermissionArgsObjectSchema = z.object({
  select: z.lazy(() => UserPermissionSelectObjectSchema).optional(),
  include: z.lazy(() => UserPermissionIncludeObjectSchema).optional()
}).strict();
export const UserPermissionArgsObjectZodSchema = z.object({
  select: z.lazy(() => UserPermissionSelectObjectSchema).optional(),
  include: z.lazy(() => UserPermissionIncludeObjectSchema).optional()
}).strict();
