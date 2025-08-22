import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema';
import { ReportCategoryUpdateWithoutChildrenInputObjectSchema } from './ReportCategoryUpdateWithoutChildrenInput.schema';
import { ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutChildrenInput.schema'

export const ReportCategoryUpdateToOneWithWhereWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateToOneWithWhereWithoutChildrenInput, Prisma.ReportCategoryUpdateToOneWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema)])
}).strict();
export const ReportCategoryUpdateToOneWithWhereWithoutChildrenInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportCategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema)])
}).strict();
