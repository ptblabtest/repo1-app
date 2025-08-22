import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithoutUpdatedByInputObjectSchema } from './ReportCategoryUpdateWithoutUpdatedByInput.schema';
import { ReportCategoryUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutUpdatedByInput.schema'

export const ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
