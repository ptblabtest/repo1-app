import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterNoteNestedInput.schema';
import { ReportUpdateOneWithoutNotesNestedInputObjectSchema } from './ReportUpdateOneWithoutNotesNestedInput.schema'

export const NoteUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.NoteUpdateWithoutCreatedByInput, Prisma.NoteUpdateWithoutCreatedByInput> = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutNotesNestedInputObjectSchema).optional()
}).strict();
export const NoteUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutNotesNestedInputObjectSchema).optional()
}).strict();
