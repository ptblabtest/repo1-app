import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeCreateManyInputObjectSchema: z.ZodType<Prisma.StageTypeCreateManyInput, Prisma.StageTypeCreateManyInput> = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string()
}).strict();
export const StageTypeCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string()
}).strict();
