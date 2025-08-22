import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithoutReportInputObjectSchema } from './StageUpdateWithoutReportInput.schema';
import { StageUncheckedUpdateWithoutReportInputObjectSchema } from './StageUncheckedUpdateWithoutReportInput.schema';
import { StageCreateWithoutReportInputObjectSchema } from './StageCreateWithoutReportInput.schema';
import { StageUncheckedCreateWithoutReportInputObjectSchema } from './StageUncheckedCreateWithoutReportInput.schema'

export const StageUpsertWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.StageUpsertWithWhereUniqueWithoutReportInput, Prisma.StageUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StageUpdateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => StageCreateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const StageUpsertWithWhereUniqueWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StageUpdateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => StageCreateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
