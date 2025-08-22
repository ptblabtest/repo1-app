import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteSelectObjectSchema } from './NoteSelect.schema';
import { NoteIncludeObjectSchema } from './NoteInclude.schema'

export const NoteArgsObjectSchema = z.object({
  select: z.lazy(() => NoteSelectObjectSchema).optional(),
  include: z.lazy(() => NoteIncludeObjectSchema).optional()
}).strict();
export const NoteArgsObjectZodSchema = z.object({
  select: z.lazy(() => NoteSelectObjectSchema).optional(),
  include: z.lazy(() => NoteIncludeObjectSchema).optional()
}).strict();
