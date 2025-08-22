import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryUpdateWithoutChildrenInputObjectSchema } from './ReportCategoryUpdateWithoutChildrenInput.schema';
import { ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutChildrenInput.schema';
import { ReportCategoryCreateWithoutChildrenInputObjectSchema } from './ReportCategoryCreateWithoutChildrenInput.schema';
import { ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutChildrenInput.schema';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema'

export const ReportCategoryUpsertWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpsertWithoutChildrenInput, Prisma.ReportCategoryUpsertWithoutChildrenInput> = z.object({
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema)]),
  where: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional()
}).strict();
export const ReportCategoryUpsertWithoutChildrenInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => ReportCategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema)]),
  where: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional()
}).strict();
