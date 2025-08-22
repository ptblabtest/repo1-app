import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorNoteNestedInput.schema';
import { UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterNoteNestedInput.schema';
import { ReportUpdateOneWithoutNotesNestedInputObjectSchema } from './ReportUpdateOneWithoutNotesNestedInput.schema'

export const NoteUpdateInputObjectSchema: z.ZodType<Prisma.NoteUpdateInput, Prisma.NoteUpdateInput> = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutNotesNestedInputObjectSchema).optional()
}).strict();
export const NoteUpdateInputObjectZodSchema = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutNotesNestedInputObjectSchema).optional()
}).strict();
