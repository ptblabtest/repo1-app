import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutChildrenInputObjectSchema } from './ReportCategoryCreateWithoutChildrenInput.schema';
import { ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutChildrenInput.schema';
import { ReportCategoryCreateOrConnectWithoutChildrenInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutChildrenInput.schema';
import { ReportCategoryUpsertWithoutChildrenInputObjectSchema } from './ReportCategoryUpsertWithoutChildrenInput.schema';
import { ReportCategoryWhereInputObjectSchema } from './ReportCategoryWhereInput.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateToOneWithWhereWithoutChildrenInputObjectSchema } from './ReportCategoryUpdateToOneWithWhereWithoutChildrenInput.schema';
import { ReportCategoryUpdateWithoutChildrenInputObjectSchema } from './ReportCategoryUpdateWithoutChildrenInput.schema';
import { ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema } from './ReportCategoryUncheckedUpdateWithoutChildrenInput.schema'

export const ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateOneWithoutChildrenNestedInput, Prisma.ReportCategoryUpdateOneWithoutChildrenNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCategoryCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportCategoryUpsertWithoutChildrenInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportCategoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportCategoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateToOneWithWhereWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema)]).optional()
}).strict();
export const ReportCategoryUpdateOneWithoutChildrenNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCategoryCreateOrConnectWithoutChildrenInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportCategoryUpsertWithoutChildrenInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportCategoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportCategoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateToOneWithWhereWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithoutChildrenInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateWithoutChildrenInputObjectSchema)]).optional()
}).strict();
