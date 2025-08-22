import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorNoteInputObjectSchema } from './UserCreateNestedOneWithoutCreatorNoteInput.schema';
import { UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterNoteInput.schema'

export const NoteCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.NoteCreateWithoutReportInput, Prisma.NoteCreateWithoutReportInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorNoteInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema).optional()
}).strict();
export const NoteCreateWithoutReportInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorNoteInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema).optional()
}).strict();
