import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutUpdatedByInputObjectSchema } from './ReportCreateWithoutUpdatedByInput.schema';
import { ReportUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReportUncheckedCreateWithoutUpdatedByInput.schema'

export const ReportCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutUpdatedByInput, Prisma.ReportCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
