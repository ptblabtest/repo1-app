import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryUpdateWithoutReportsInputObjectSchema } from './ReportCategoryUpdateWithoutReportsInput.schema';
import { ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutReportsInput.schema';
import { ReportCategoryCreateWithoutReportsInputObjectSchema } from './ReportCategoryCreateWithoutReportsInput.schema';
import { ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutReportsInput.schema';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema'

export const ReportCategoryUpsertWithoutReportsInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpsertWithoutReportsInput, Prisma.ReportCategoryUpsertWithoutReportsInput> = z.object({
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema)]),
  where: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional()
}).strict();
export const ReportCategoryUpsertWithoutReportsInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema)]),
  where: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional()
}).strict();
