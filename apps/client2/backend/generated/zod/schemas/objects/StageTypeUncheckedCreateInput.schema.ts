import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageUncheckedCreateNestedManyWithoutTypeInputObjectSchema } from './StageUncheckedCreateNestedManyWithoutTypeInput.schema'

export const StageTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StageTypeUncheckedCreateInput, Prisma.StageTypeUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string(),
  stages: z.lazy(() => StageUncheckedCreateNestedManyWithoutTypeInputObjectSchema).optional()
}).strict();
export const StageTypeUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string(),
  stages: z.lazy(() => StageUncheckedCreateNestedManyWithoutTypeInputObjectSchema).optional()
}).strict();
