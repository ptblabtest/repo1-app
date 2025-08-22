import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageSelectObjectSchema } from './StageSelect.schema';
import { StageIncludeObjectSchema } from './StageInclude.schema'

export const StageArgsObjectSchema = z.object({
  select: z.lazy(() => StageSelectObjectSchema).optional(),
  include: z.lazy(() => StageIncludeObjectSchema).optional()
}).strict();
export const StageArgsObjectZodSchema = z.object({
  select: z.lazy(() => StageSelectObjectSchema).optional(),
  include: z.lazy(() => StageIncludeObjectSchema).optional()
}).strict();
