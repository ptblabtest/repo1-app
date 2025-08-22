import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateWithoutReportInputObjectSchema } from './StageCreateWithoutReportInput.schema';
import { StageUncheckedCreateWithoutReportInputObjectSchema } from './StageUncheckedCreateWithoutReportInput.schema';
import { StageCreateOrConnectWithoutReportInputObjectSchema } from './StageCreateOrConnectWithoutReportInput.schema';
import { StageUpsertWithWhereUniqueWithoutReportInputObjectSchema } from './StageUpsertWithWhereUniqueWithoutReportInput.schema';
import { StageCreateManyReportInputEnvelopeObjectSchema } from './StageCreateManyReportInputEnvelope.schema';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithWhereUniqueWithoutReportInputObjectSchema } from './StageUpdateWithWhereUniqueWithoutReportInput.schema';
import { StageUpdateManyWithWhereWithoutReportInputObjectSchema } from './StageUpdateManyWithWhereWithoutReportInput.schema';
import { StageScalarWhereInputObjectSchema } from './StageScalarWhereInput.schema'

export const StageUncheckedUpdateManyWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.StageUncheckedUpdateManyWithoutReportNestedInput, Prisma.StageUncheckedUpdateManyWithoutReportNestedInput> = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutReportInputObjectSchema), z.lazy(() => StageCreateWithoutReportInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StageUpsertWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => StageUpsertWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyReportInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StageUpdateWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => StageUpdateWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StageUpdateManyWithWhereWithoutReportInputObjectSchema), z.lazy(() => StageUpdateManyWithWhereWithoutReportInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StageUncheckedUpdateManyWithoutReportNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutReportInputObjectSchema), z.lazy(() => StageCreateWithoutReportInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StageUpsertWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => StageUpsertWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyReportInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StageUpdateWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => StageUpdateWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StageUpdateManyWithWhereWithoutReportInputObjectSchema), z.lazy(() => StageUpdateManyWithWhereWithoutReportInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
