import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithoutCreatedByInputObjectSchema } from './StageUpdateWithoutCreatedByInput.schema';
import { StageUncheckedUpdateWithoutCreatedByInputObjectSchema } from './StageUncheckedUpdateWithoutCreatedByInput.schema'

export const StageUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StageUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.StageUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const StageUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
