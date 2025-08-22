import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryCreateWithoutChildrenInputObjectSchema } from './ReportCategoryCreateWithoutChildrenInput.schema';
import { ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutChildrenInput.schema'

export const ReportCategoryCreateOrConnectWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateOrConnectWithoutChildrenInput, Prisma.ReportCategoryCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema)])
}).strict();
export const ReportCategoryCreateOrConnectWithoutChildrenInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema)])
}).strict();
