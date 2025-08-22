import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeSelectObjectSchema } from './StageTypeSelect.schema';
import { StageTypeIncludeObjectSchema } from './StageTypeInclude.schema'

export const StageTypeArgsObjectSchema = z.object({
  select: z.lazy(() => StageTypeSelectObjectSchema).optional(),
  include: z.lazy(() => StageTypeIncludeObjectSchema).optional()
}).strict();
export const StageTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => StageTypeSelectObjectSchema).optional(),
  include: z.lazy(() => StageTypeIncludeObjectSchema).optional()
}).strict();
