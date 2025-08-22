import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutCreatedByInputObjectSchema } from './ReportCategoryCreateWithoutCreatedByInput.schema';
import { ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutCreatedByInput.schema';
import { ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutCreatedByInput.schema';
import { ReportCategoryCreateManyCreatedByInputEnvelopeObjectSchema } from './ReportCategoryCreateManyCreatedByInputEnvelope.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema'

export const ReportCategoryUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedCreateNestedManyWithoutCreatedByInput, Prisma.ReportCategoryUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCategoryUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
