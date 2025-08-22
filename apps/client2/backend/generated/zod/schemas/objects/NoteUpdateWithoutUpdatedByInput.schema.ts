import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorNoteNestedInput.schema';
import { ReportUpdateOneWithoutNotesNestedInputObjectSchema } from './ReportUpdateOneWithoutNotesNestedInput.schema'

export const NoteUpdateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteUpdateWithoutUpdatedByInput, Prisma.NoteUpdateWithoutUpdatedByInput> = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutNotesNestedInputObjectSchema).optional()
}).strict();
export const NoteUpdateWithoutUpdatedByInputObjectZodSchema = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutNotesNestedInputObjectSchema).optional()
}).strict();
