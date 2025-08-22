import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryCreateWithoutUpdatedByInputObjectSchema } from './ReportCategoryCreateWithoutUpdatedByInput.schema';
import { ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutUpdatedByInput.schema'

export const ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateOrConnectWithoutUpdatedByInput, Prisma.ReportCategoryCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
