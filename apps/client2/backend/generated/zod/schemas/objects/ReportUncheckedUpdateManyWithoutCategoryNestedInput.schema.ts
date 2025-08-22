import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutCategoryInputObjectSchema } from './ReportCreateWithoutCategoryInput.schema';
import { ReportUncheckedCreateWithoutCategoryInputObjectSchema } from './ReportUncheckedCreateWithoutCategoryInput.schema';
import { ReportCreateOrConnectWithoutCategoryInputObjectSchema } from './ReportCreateOrConnectWithoutCategoryInput.schema';
import { ReportUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ReportCreateManyCategoryInputEnvelopeObjectSchema } from './ReportCreateManyCategoryInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ReportUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ReportUpdateManyWithWhereWithoutCategoryInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

export const ReportUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutCategoryNestedInput, Prisma.ReportUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutCategoryNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
