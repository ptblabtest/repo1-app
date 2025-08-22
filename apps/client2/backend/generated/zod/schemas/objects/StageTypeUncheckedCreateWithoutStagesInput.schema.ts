import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeUncheckedCreateWithoutStagesInputObjectSchema: z.ZodType<Prisma.StageTypeUncheckedCreateWithoutStagesInput, Prisma.StageTypeUncheckedCreateWithoutStagesInput> = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string()
}).strict();
export const StageTypeUncheckedCreateWithoutStagesInputObjectZodSchema = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string()
}).strict();
