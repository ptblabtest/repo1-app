import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutStagesInputObjectSchema } from './ReportCreateWithoutStagesInput.schema';
import { ReportUncheckedCreateWithoutStagesInputObjectSchema } from './ReportUncheckedCreateWithoutStagesInput.schema'

export const ReportCreateOrConnectWithoutStagesInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutStagesInput, Prisma.ReportCreateOrConnectWithoutStagesInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutStagesInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutStagesInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutStagesInputObjectSchema)])
}).strict();
