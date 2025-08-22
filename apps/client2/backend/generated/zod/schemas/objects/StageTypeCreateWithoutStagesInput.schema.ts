import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeCreateWithoutStagesInputObjectSchema: z.ZodType<Prisma.StageTypeCreateWithoutStagesInput, Prisma.StageTypeCreateWithoutStagesInput> = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string()
}).strict();
export const StageTypeCreateWithoutStagesInputObjectZodSchema = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string()
}).strict();
