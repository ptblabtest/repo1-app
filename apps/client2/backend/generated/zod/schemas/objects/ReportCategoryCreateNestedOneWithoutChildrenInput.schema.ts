import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutChildrenInputObjectSchema } from './ReportCategoryCreateWithoutChildrenInput.schema';
import { ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutChildrenInput.schema';
import { ReportCategoryCreateOrConnectWithoutChildrenInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutChildrenInput.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema'

export const ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateNestedOneWithoutChildrenInput, Prisma.ReportCategoryCreateNestedOneWithoutChildrenInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCategoryCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  connect: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportCategoryCreateNestedOneWithoutChildrenInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCategoryCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  connect: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).optional()
}).strict();
