import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCategoryInputObjectSchema } from './ReportUpdateWithoutCategoryInput.schema';
import { ReportUncheckedUpdateWithoutCategoryInputObjectSchema } from './ReportUncheckedUpdateWithoutCategoryInput.schema'

export const ReportUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCategoryInput, Prisma.ReportUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
