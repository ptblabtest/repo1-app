import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithoutUpdatedByInputObjectSchema } from './StageUpdateWithoutUpdatedByInput.schema';
import { StageUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './StageUncheckedUpdateWithoutUpdatedByInput.schema'

export const StageUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.StageUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.StageUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const StageUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
