import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereInputObjectSchema } from './NoteWhereInput.schema'

export const NoteListRelationFilterObjectSchema: z.ZodType<Prisma.NoteListRelationFilter, Prisma.NoteListRelationFilter> = z.object({
  every: z.lazy(() => NoteWhereInputObjectSchema).optional(),
  some: z.lazy(() => NoteWhereInputObjectSchema).optional(),
  none: z.lazy(() => NoteWhereInputObjectSchema).optional()
}).strict();
export const NoteListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => NoteWhereInputObjectSchema).optional(),
  some: z.lazy(() => NoteWhereInputObjectSchema).optional(),
  none: z.lazy(() => NoteWhereInputObjectSchema).optional()
}).strict();
