import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutUpdatedByInputObjectSchema } from './ReportCategoryCreateWithoutUpdatedByInput.schema';
import { ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutUpdatedByInput.schema';
import { ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutUpdatedByInput.schema';
import { ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ReportCategoryCreateManyUpdatedByInputEnvelopeObjectSchema } from './ReportCategoryCreateManyUpdatedByInputEnvelope.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ReportCategoryUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ReportCategoryUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ReportCategoryScalarWhereInputObjectSchema } from './ReportCategoryScalarWhereInput.schema'

export const ReportCategoryUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateManyWithoutUpdatedByNestedInput, Prisma.ReportCategoryUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportCategoryUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
