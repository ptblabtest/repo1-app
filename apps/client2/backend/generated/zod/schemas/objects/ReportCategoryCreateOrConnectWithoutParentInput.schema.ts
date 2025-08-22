import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryCreateWithoutParentInputObjectSchema } from './ReportCategoryCreateWithoutParentInput.schema';
import { ReportCategoryUncheckedCreateWithoutParentInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutParentInput.schema'

export const ReportCategoryCreateOrConnectWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateOrConnectWithoutParentInput, Prisma.ReportCategoryCreateOrConnectWithoutParentInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
export const ReportCategoryCreateOrConnectWithoutParentInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
