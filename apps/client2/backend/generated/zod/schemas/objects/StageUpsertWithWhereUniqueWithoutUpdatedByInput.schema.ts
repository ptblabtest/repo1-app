import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithoutUpdatedByInputObjectSchema } from './StageUpdateWithoutUpdatedByInput.schema';
import { StageUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './StageUncheckedUpdateWithoutUpdatedByInput.schema';
import { StageCreateWithoutUpdatedByInputObjectSchema } from './StageCreateWithoutUpdatedByInput.schema';
import { StageUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StageUncheckedCreateWithoutUpdatedByInput.schema'

export const StageUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.StageUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.StageUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StageUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const StageUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StageUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
