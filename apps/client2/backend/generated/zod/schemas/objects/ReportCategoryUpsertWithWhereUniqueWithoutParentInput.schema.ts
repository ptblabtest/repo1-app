import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithoutParentInputObjectSchema } from './ReportCategoryUpdateWithoutParentInput.schema';
import { ReportCategoryUncheckedUpdateWithoutParentInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutParentInput.schema';
import { ReportCategoryCreateWithoutParentInputObjectSchema } from './ReportCategoryCreateWithoutParentInput.schema';
import { ReportCategoryUncheckedCreateWithoutParentInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutParentInput.schema'

export const ReportCategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpsertWithWhereUniqueWithoutParentInput, Prisma.ReportCategoryUpsertWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutParentInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
export const ReportCategoryUpsertWithWhereUniqueWithoutParentInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutParentInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
