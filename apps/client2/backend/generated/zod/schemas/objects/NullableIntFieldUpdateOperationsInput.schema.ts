import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NullableIntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput, Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().int().nullish(),
  increment: z.number().int().optional(),
  decrement: z.number().int().optional(),
  multiply: z.number().int().optional(),
  divide: z.number().int().optional()
}).strict();
export const NullableIntFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: z.number().int().nullish(),
  increment: z.number().int().optional(),
  decrement: z.number().int().optional(),
  multiply: z.number().int().optional(),
  divide: z.number().int().optional()
}).strict();
