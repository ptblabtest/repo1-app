import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { RoleCountOutputTypeSelectObjectSchema } from './RoleCountOutputTypeSelect.schema'

export const RoleCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => RoleCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RoleCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => RoleCountOutputTypeSelectObjectSchema).optional()
}).strict();
