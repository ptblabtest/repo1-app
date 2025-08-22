import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithoutTypeInputObjectSchema } from './StageUpdateWithoutTypeInput.schema';
import { StageUncheckedUpdateWithoutTypeInputObjectSchema } from './StageUncheckedUpdateWithoutTypeInput.schema'

export const StageUpdateWithWhereUniqueWithoutTypeInputObjectSchema: z.ZodType<Prisma.StageUpdateWithWhereUniqueWithoutTypeInput, Prisma.StageUpdateWithWhereUniqueWithoutTypeInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutTypeInputObjectSchema)])
}).strict();
export const StageUpdateWithWhereUniqueWithoutTypeInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutTypeInputObjectSchema)])
}).strict();
