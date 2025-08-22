import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutParentInputObjectSchema } from './ReportCategoryCreateWithoutParentInput.schema';
import { ReportCategoryUncheckedCreateWithoutParentInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutParentInput.schema';
import { ReportCategoryCreateOrConnectWithoutParentInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutParentInput.schema';
import { ReportCategoryCreateManyParentInputEnvelopeObjectSchema } from './ReportCategoryCreateManyParentInputEnvelope.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema'

export const ReportCategoryCreateNestedManyWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateNestedManyWithoutParentInput, Prisma.ReportCategoryCreateNestedManyWithoutParentInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyParentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCategoryCreateNestedManyWithoutParentInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyParentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
