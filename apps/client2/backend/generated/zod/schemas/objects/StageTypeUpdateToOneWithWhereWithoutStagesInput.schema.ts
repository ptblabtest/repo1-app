import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeWhereInputObjectSchema } from './StageTypeWhereInput.schema';
import { StageTypeUpdateWithoutStagesInputObjectSchema } from './StageTypeUpdateWithoutStagesInput.schema';
import { StageTypeUncheckedUpdateWithoutStagesInputObjectSchema } from './StageTypeUncheckedUpdateWithoutStagesInput.schema'

export const StageTypeUpdateToOneWithWhereWithoutStagesInputObjectSchema: z.ZodType<Prisma.StageTypeUpdateToOneWithWhereWithoutStagesInput, Prisma.StageTypeUpdateToOneWithWhereWithoutStagesInput> = z.object({
  where: z.lazy(() => StageTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StageTypeUpdateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedUpdateWithoutStagesInputObjectSchema)])
}).strict();
export const StageTypeUpdateToOneWithWhereWithoutStagesInputObjectZodSchema = z.object({
  where: z.lazy(() => StageTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StageTypeUpdateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedUpdateWithoutStagesInputObjectSchema)])
}).strict();
