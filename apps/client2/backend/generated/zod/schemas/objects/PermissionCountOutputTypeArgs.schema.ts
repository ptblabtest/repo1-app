import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCountOutputTypeSelectObjectSchema } from './PermissionCountOutputTypeSelect.schema'

export const PermissionCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => PermissionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PermissionCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => PermissionCountOutputTypeSelectObjectSchema).optional()
}).strict();
