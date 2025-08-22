import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCreatedByInputObjectSchema } from './ReportUpdateWithoutCreatedByInput.schema';
import { ReportUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ReportUncheckedUpdateWithoutCreatedByInput.schema';
import { ReportCreateWithoutCreatedByInputObjectSchema } from './ReportCreateWithoutCreatedByInput.schema';
import { ReportUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReportUncheckedCreateWithoutCreatedByInput.schema'

export const ReportUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.ReportUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
