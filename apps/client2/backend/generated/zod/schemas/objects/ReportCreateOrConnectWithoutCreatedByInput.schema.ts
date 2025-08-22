import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutCreatedByInputObjectSchema } from './ReportCreateWithoutCreatedByInput.schema';
import { ReportUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReportUncheckedCreateWithoutCreatedByInput.schema'

export const ReportCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutCreatedByInput, Prisma.ReportCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
