import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithoutTypeInputObjectSchema } from './StageUpdateWithoutTypeInput.schema';
import { StageUncheckedUpdateWithoutTypeInputObjectSchema } from './StageUncheckedUpdateWithoutTypeInput.schema';
import { StageCreateWithoutTypeInputObjectSchema } from './StageCreateWithoutTypeInput.schema';
import { StageUncheckedCreateWithoutTypeInputObjectSchema } from './StageUncheckedCreateWithoutTypeInput.schema'

export const StageUpsertWithWhereUniqueWithoutTypeInputObjectSchema: z.ZodType<Prisma.StageUpsertWithWhereUniqueWithoutTypeInput, Prisma.StageUpsertWithWhereUniqueWithoutTypeInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StageUpdateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => StageCreateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema)])
}).strict();
export const StageUpsertWithWhereUniqueWithoutTypeInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StageUpdateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => StageCreateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema)])
}).strict();
