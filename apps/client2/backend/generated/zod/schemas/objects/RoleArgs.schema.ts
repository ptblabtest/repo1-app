import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { RoleSelectObjectSchema } from './RoleSelect.schema';
import { RoleIncludeObjectSchema } from './RoleInclude.schema'

export const RoleArgsObjectSchema = z.object({
  select: z.lazy(() => RoleSelectObjectSchema).optional(),
  include: z.lazy(() => RoleIncludeObjectSchema).optional()
}).strict();
export const RoleArgsObjectZodSchema = z.object({
  select: z.lazy(() => RoleSelectObjectSchema).optional(),
  include: z.lazy(() => RoleIncludeObjectSchema).optional()
}).strict();
