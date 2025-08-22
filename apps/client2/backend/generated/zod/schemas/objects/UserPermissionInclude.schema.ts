import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { PermissionArgsObjectSchema } from './PermissionArgs.schema'

export const UserPermissionIncludeObjectSchema: z.ZodType<Prisma.UserPermissionInclude, Prisma.UserPermissionInclude> = z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  permission: z.union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const UserPermissionIncludeObjectZodSchema = z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  permission: z.union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
