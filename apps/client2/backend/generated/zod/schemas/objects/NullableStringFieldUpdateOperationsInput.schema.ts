import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NullableStringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().nullish()
}).strict();
export const NullableStringFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: z.string().nullish()
}).strict();
