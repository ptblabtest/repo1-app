import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorNoteInputObjectSchema } from './UserCreateNestedOneWithoutCreatorNoteInput.schema';
import { ReportCreateNestedOneWithoutNotesInputObjectSchema } from './ReportCreateNestedOneWithoutNotesInput.schema'

export const NoteCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteCreateWithoutUpdatedByInput, Prisma.NoteCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorNoteInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutNotesInputObjectSchema).optional()
}).strict();
export const NoteCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorNoteInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutNotesInputObjectSchema).optional()
}).strict();
