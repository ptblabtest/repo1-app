import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema';
import { ReportCategoryUpdateWithoutReportsInputObjectSchema } from './ReportCategoryUpdateWithoutReportsInput.schema';
import { ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutReportsInput.schema'

export const ReportCategoryUpdateToOneWithWhereWithoutReportsInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateToOneWithWhereWithoutReportsInput, Prisma.ReportCategoryUpdateToOneWithWhereWithoutReportsInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema)])
}).strict();
export const ReportCategoryUpdateToOneWithWhereWithoutReportsInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema)])
}).strict();
