import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithoutCreatedByInputObjectSchema } from './StageUpdateWithoutCreatedByInput.schema';
import { StageUncheckedUpdateWithoutCreatedByInputObjectSchema } from './StageUncheckedUpdateWithoutCreatedByInput.schema';
import { StageCreateWithoutCreatedByInputObjectSchema } from './StageCreateWithoutCreatedByInput.schema';
import { StageUncheckedCreateWithoutCreatedByInputObjectSchema } from './StageUncheckedCreateWithoutCreatedByInput.schema'

export const StageUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StageUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.StageUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StageUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const StageUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StageUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
