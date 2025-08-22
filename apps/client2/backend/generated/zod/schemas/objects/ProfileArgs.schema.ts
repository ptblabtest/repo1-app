import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileSelectObjectSchema } from './ProfileSelect.schema';
import { ProfileIncludeObjectSchema } from './ProfileInclude.schema'

export const ProfileArgsObjectSchema = z.object({
  select: z.lazy(() => ProfileSelectObjectSchema).optional(),
  include: z.lazy(() => ProfileIncludeObjectSchema).optional()
}).strict();
export const ProfileArgsObjectZodSchema = z.object({
  select: z.lazy(() => ProfileSelectObjectSchema).optional(),
  include: z.lazy(() => ProfileIncludeObjectSchema).optional()
}).strict();
