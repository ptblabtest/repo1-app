import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorNoteInputObjectSchema } from './UserCreateNestedOneWithoutCreatorNoteInput.schema';
import { UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterNoteInput.schema';
import { ReportCreateNestedOneWithoutNotesInputObjectSchema } from './ReportCreateNestedOneWithoutNotesInput.schema'

export const NoteCreateInputObjectSchema: z.ZodType<Prisma.NoteCreateInput, Prisma.NoteCreateInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorNoteInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutNotesInputObjectSchema).optional()
}).strict();
export const NoteCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorNoteInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutNotesInputObjectSchema).optional()
}).strict();
