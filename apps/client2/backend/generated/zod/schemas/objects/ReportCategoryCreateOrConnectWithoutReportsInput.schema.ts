import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryCreateWithoutReportsInputObjectSchema } from './ReportCategoryCreateWithoutReportsInput.schema';
import { ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutReportsInput.schema'

export const ReportCategoryCreateOrConnectWithoutReportsInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateOrConnectWithoutReportsInput, Prisma.ReportCategoryCreateOrConnectWithoutReportsInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema)])
}).strict();
export const ReportCategoryCreateOrConnectWithoutReportsInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema)])
}).strict();
