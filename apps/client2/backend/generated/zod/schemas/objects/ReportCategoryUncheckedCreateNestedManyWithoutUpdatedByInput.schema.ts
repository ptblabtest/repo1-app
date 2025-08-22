import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutUpdatedByInputObjectSchema } from './ReportCategoryCreateWithoutUpdatedByInput.schema';
import { ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutUpdatedByInput.schema';
import { ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutUpdatedByInput.schema';
import { ReportCategoryCreateManyUpdatedByInputEnvelopeObjectSchema } from './ReportCategoryCreateManyUpdatedByInputEnvelope.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema'

export const ReportCategoryUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedCreateNestedManyWithoutUpdatedByInput, Prisma.ReportCategoryUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCategoryUncheckedCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
