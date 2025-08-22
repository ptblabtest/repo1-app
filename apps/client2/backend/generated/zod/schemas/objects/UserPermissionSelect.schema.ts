import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { PermissionArgsObjectSchema } from './PermissionArgs.schema'

export const UserPermissionSelectObjectSchema: z.ZodType<Prisma.UserPermissionSelect, Prisma.UserPermissionSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  permission: z.union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional()
}).strict();
export const UserPermissionSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  permission: z.union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional()
}).strict();
