import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorNoteNestedInput.schema';
import { UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterNoteNestedInput.schema'

export const NoteUpdateWithoutReportInputObjectSchema: z.ZodType<Prisma.NoteUpdateWithoutReportInput, Prisma.NoteUpdateWithoutReportInput> = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema).optional()
}).strict();
export const NoteUpdateWithoutReportInputObjectZodSchema = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema).optional()
}).strict();
