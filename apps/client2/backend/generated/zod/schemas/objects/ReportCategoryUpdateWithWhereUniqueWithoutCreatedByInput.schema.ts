import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithoutCreatedByInputObjectSchema } from './ReportCategoryUpdateWithoutCreatedByInput.schema';
import { ReportCategoryUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutCreatedByInput.schema'

export const ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
