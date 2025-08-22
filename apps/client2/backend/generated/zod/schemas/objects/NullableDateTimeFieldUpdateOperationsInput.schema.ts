import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NullableDateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput, Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().nullish()
}).strict();
export const NullableDateTimeFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: z.date().nullish()
}).strict();
