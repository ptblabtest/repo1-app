import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageCreateWithoutReportInputObjectSchema } from './StageCreateWithoutReportInput.schema';
import { StageUncheckedCreateWithoutReportInputObjectSchema } from './StageUncheckedCreateWithoutReportInput.schema'

export const StageCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.StageCreateOrConnectWithoutReportInput, Prisma.StageCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageCreateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const StageCreateOrConnectWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageCreateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
