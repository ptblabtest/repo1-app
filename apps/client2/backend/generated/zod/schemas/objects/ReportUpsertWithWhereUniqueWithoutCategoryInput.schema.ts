import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCategoryInputObjectSchema } from './ReportUpdateWithoutCategoryInput.schema';
import { ReportUncheckedUpdateWithoutCategoryInputObjectSchema } from './ReportUncheckedUpdateWithoutCategoryInput.schema';
import { ReportCreateWithoutCategoryInputObjectSchema } from './ReportCreateWithoutCategoryInput.schema';
import { ReportUncheckedCreateWithoutCategoryInputObjectSchema } from './ReportUncheckedCreateWithoutCategoryInput.schema'

export const ReportUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCategoryInput, Prisma.ReportUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
