import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileSelectObjectSchema } from './FileSelect.schema';
import { FileIncludeObjectSchema } from './FileInclude.schema'

export const FileArgsObjectSchema = z.object({
  select: z.lazy(() => FileSelectObjectSchema).optional(),
  include: z.lazy(() => FileIncludeObjectSchema).optional()
}).strict();
export const FileArgsObjectZodSchema = z.object({
  select: z.lazy(() => FileSelectObjectSchema).optional(),
  include: z.lazy(() => FileIncludeObjectSchema).optional()
}).strict();
