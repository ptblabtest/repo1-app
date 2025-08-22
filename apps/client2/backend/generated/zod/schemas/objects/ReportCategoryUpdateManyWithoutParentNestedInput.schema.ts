import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateWithoutParentInputObjectSchema } from './ReportCategoryCreateWithoutParentInput.schema';
import { ReportCategoryUncheckedCreateWithoutParentInputObjectSchema } from './ReportCategoryUncheckedCreateWithoutParentInput.schema';
import { ReportCategoryCreateOrConnectWithoutParentInputObjectSchema } from './ReportCategoryCreateOrConnectWithoutParentInput.schema';
import { ReportCategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './ReportCategoryUpsertWithWhereUniqueWithoutParentInput.schema';
import { ReportCategoryCreateManyParentInputEnvelopeObjectSchema } from './ReportCategoryCreateManyParentInputEnvelope.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './ReportCategoryUpdateWithWhereUniqueWithoutParentInput.schema';
import { ReportCategoryUpdateManyWithWhereWithoutParentInputObjectSchema } from './ReportCategoryUpdateManyWithWhereWithoutParentInput.schema';
import { ReportCategoryScalarWhereInputObjectSchema } from './ReportCategoryScalarWhereInput.schema'

export const ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateManyWithoutParentNestedInput, Prisma.ReportCategoryUpdateManyWithoutParentNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyParentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutParentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportCategoryUpdateManyWithoutParentNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryCreateWithoutParentInputObjectSchema).array(), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCategoryCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCategoryCreateManyParentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema), z.lazy(() => ReportCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutParentInputObjectSchema), z.lazy(() => ReportCategoryUpdateManyWithWhereWithoutParentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportCategoryScalarWhereInputObjectSchema), z.lazy(() => ReportCategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
