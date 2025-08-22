import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterNoteInput.schema';
import { ReportCreateNestedOneWithoutNotesInputObjectSchema } from './ReportCreateNestedOneWithoutNotesInput.schema'

export const NoteCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.NoteCreateWithoutCreatedByInput, Prisma.NoteCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutNotesInputObjectSchema).optional()
}).strict();
export const NoteCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutNotesInputObjectSchema).optional()
}).strict();
