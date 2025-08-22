import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutReportsInputObjectSchema } from './ReportCategoryCreateWithoutReportsInput.schema';
import { ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutReportsInput.schema';
import { ReportCategoryCreateOrConnectWithoutReportsInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutReportsInput.schema';
import { ReportCategoryUpsertWithoutReportsInputObjectSchema } from './ReportCategoryUpsertWithoutReportsInput.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateToOneWithWhereWithoutReportsInputObjectSchema } from './ReportCategoryUpdateToOneWithWhereWithoutReportsInput.schema';
import { ReportCategoryUpdateWithoutReportsInputObjectSchema } from './ReportCategoryUpdateWithoutReportsInput.schema';
import { ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutReportsInput.schema'

export const ReportCategoryUpdateOneRequiredWithoutReportsNestedInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateOneRequiredWithoutReportsNestedInput, Prisma.ReportCategoryUpdateOneRequiredWithoutReportsNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCategoryCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportCategoryUpsertWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateToOneWithWhereWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema)]).optional()
}).strict();
export const ReportCategoryUpdateOneRequiredWithoutReportsNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCategoryCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportCategoryUpsertWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateToOneWithWhereWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithoutReportsInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutReportsInputObjectSchema)]).optional()
}).strict();
