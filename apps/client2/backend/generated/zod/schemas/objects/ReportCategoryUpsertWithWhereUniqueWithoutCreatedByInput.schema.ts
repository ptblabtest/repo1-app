import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithoutCreatedByInputObjectSchema } from './ReportCategoryUpdateWithoutCreatedByInput.schema';
import { ReportCategoryUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutCreatedByInput.schema';
import { ReportCategoryCreateWithoutCreatedByInputObjectSchema } from './ReportCategoryCreateWithoutCreatedByInput.schema';
import { ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutCreatedByInput.schema'

export const ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
