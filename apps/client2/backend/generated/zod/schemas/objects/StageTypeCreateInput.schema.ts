import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateNestedManyWithoutTypeInputObjectSchema } from './StageCreateNestedManyWithoutTypeInput.schema'

export const StageTypeCreateInputObjectSchema: z.ZodType<Prisma.StageTypeCreateInput, Prisma.StageTypeCreateInput> = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string(),
  stages: z.lazy(() => StageCreateNestedManyWithoutTypeInputObjectSchema).optional()
}).strict();
export const StageTypeCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string(),
  stages: z.lazy(() => StageCreateNestedManyWithoutTypeInputObjectSchema).optional()
}).strict();
