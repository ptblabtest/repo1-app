import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionSelectObjectSchema } from './PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from './PermissionInclude.schema'

export const PermissionArgsObjectSchema = z.object({
  select: z.lazy(() => PermissionSelectObjectSchema).optional(),
  include: z.lazy(() => PermissionIncludeObjectSchema).optional()
}).strict();
export const PermissionArgsObjectZodSchema = z.object({
  select: z.lazy(() => PermissionSelectObjectSchema).optional(),
  include: z.lazy(() => PermissionIncludeObjectSchema).optional()
}).strict();
