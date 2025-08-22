import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutCreatedByInputObjectSchema } from './ReportCategoryCreateWithoutCreatedByInput.schema';
import { ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutCreatedByInput.schema';
import { ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutCreatedByInput.schema';
import { ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ReportCategoryCreateManyCreatedByInputEnvelopeObjectSchema } from './ReportCategoryCreateManyCreatedByInputEnvelope.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ReportCategoryUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ReportCategoryUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ReportCategoryScalarWhereInputObjectSchema } from './ReportCategoryScalarWhereInput.schema'

export const ReportCategoryUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateManyWithoutCreatedByNestedInput, Prisma.ReportCategoryUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportCategoryUpdateManyWithoutCreatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
