import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryCreateWithoutCreatedByInputObjectSchema } from './ReportCategoryCreateWithoutCreatedByInput.schema';
import { ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutCreatedByInput.schema'

export const ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateOrConnectWithoutCreatedByInput, Prisma.ReportCategoryCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ReportCategoryCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
