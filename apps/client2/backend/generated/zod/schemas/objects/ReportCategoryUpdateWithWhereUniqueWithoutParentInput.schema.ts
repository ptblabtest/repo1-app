import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithoutParentInputObjectSchema } from './ReportCategoryUpdateWithoutParentInput.schema';
import { ReportCategoryUncheckedUpdateWithoutParentInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutParentInput.schema'

export const ReportCategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateWithWhereUniqueWithoutParentInput, Prisma.ReportCategoryUpdateWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutParentInputObjectSchema)])
}).strict();
export const ReportCategoryUpdateWithWhereUniqueWithoutParentInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutParentInputObjectSchema)])
}).strict();
