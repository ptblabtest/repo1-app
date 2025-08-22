import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithoutReportInputObjectSchema } from './StageUpdateWithoutReportInput.schema';
import { StageUncheckedUpdateWithoutReportInputObjectSchema } from './StageUncheckedUpdateWithoutReportInput.schema'

export const StageUpdateWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.StageUpdateWithWhereUniqueWithoutReportInput, Prisma.StageUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const StageUpdateWithWhereUniqueWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
