import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutUpdatedByInputObjectSchema } from './ReportUpdateWithoutUpdatedByInput.schema';
import { ReportUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ReportUncheckedUpdateWithoutUpdatedByInput.schema';
import { ReportCreateWithoutUpdatedByInputObjectSchema } from './ReportCreateWithoutUpdatedByInput.schema';
import { ReportUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReportUncheckedCreateWithoutUpdatedByInput.schema'

export const ReportUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.ReportUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
