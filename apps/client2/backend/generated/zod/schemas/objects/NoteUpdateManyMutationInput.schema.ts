import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

export const NoteUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.NoteUpdateManyMutationInput, Prisma.NoteUpdateManyMutationInput> = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish()
}).strict();
export const NoteUpdateManyMutationInputObjectZodSchema = z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish()
}).strict();
