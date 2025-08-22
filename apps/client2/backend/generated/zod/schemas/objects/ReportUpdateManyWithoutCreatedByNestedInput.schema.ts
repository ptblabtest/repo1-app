import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutCreatedByInputObjectSchema } from './ReportCreateWithoutCreatedByInput.schema';
import { ReportUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReportUncheckedCreateWithoutCreatedByInput.schema';
import { ReportCreateOrConnectWithoutCreatedByInputObjectSchema } from './ReportCreateOrConnectWithoutCreatedByInput.schema';
import { ReportUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ReportCreateManyCreatedByInputEnvelopeObjectSchema } from './ReportCreateManyCreatedByInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ReportUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ReportUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

export const ReportUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutCreatedByNestedInput, Prisma.ReportUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutCreatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
