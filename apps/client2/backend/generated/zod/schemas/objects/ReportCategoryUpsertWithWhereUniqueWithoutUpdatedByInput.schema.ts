import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithoutUpdatedByInputObjectSchema } from './ReportCategoryUpdateWithoutUpdatedByInput.schema';
import { ReportCategoryUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutUpdatedByInput.schema';
import { ReportCategoryCreateWithoutUpdatedByInputObjectSchema } from './ReportCategoryCreateWithoutUpdatedByInput.schema';
import { ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutUpdatedByInput.schema'

export const ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
