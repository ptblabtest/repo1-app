import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutUpdatedByInputObjectSchema } from './ReportCreateWithoutUpdatedByInput.schema';
import { ReportUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReportUncheckedCreateWithoutUpdatedByInput.schema';
import { ReportCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ReportCreateOrConnectWithoutUpdatedByInput.schema';
import { ReportUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ReportCreateManyUpdatedByInputEnvelopeObjectSchema } from './ReportCreateManyUpdatedByInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ReportUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ReportUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

export const ReportUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutUpdatedByNestedInput, Prisma.ReportUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
