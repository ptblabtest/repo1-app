import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutCategoryInputObjectSchema } from './ReportCreateWithoutCategoryInput.schema';
import { ReportUncheckedCreateWithoutCategoryInputObjectSchema } from './ReportUncheckedCreateWithoutCategoryInput.schema'

export const ReportCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutCategoryInput, Prisma.ReportCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutCategoryInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
