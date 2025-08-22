import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutReportsInputObjectSchema } from './ReportCategoryCreateWithoutReportsInput.schema';
import { ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutReportsInput.schema';
import { ReportCategoryCreateOrConnectWithoutReportsInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutReportsInput.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema'

export const ReportCategoryCreateNestedOneWithoutReportsInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateNestedOneWithoutReportsInput, Prisma.ReportCategoryCreateNestedOneWithoutReportsInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCategoryCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportCategoryCreateNestedOneWithoutReportsInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCategoryCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).optional()
}).strict();
