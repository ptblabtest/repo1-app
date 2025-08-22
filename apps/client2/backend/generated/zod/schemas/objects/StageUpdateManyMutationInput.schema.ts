import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

export const StageUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.StageUpdateManyMutationInput, Prisma.StageUpdateManyMutationInput> = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish()
}).strict();
export const StageUpdateManyMutationInputObjectZodSchema = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish()
}).strict();
