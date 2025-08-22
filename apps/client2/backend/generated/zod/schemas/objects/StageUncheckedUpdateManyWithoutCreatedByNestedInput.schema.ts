import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateWithoutCreatedByInputObjectSchema } from './StageCreateWithoutCreatedByInput.schema';
import { StageUncheckedCreateWithoutCreatedByInputObjectSchema } from './StageUncheckedCreateWithoutCreatedByInput.schema';
import { StageCreateOrConnectWithoutCreatedByInputObjectSchema } from './StageCreateOrConnectWithoutCreatedByInput.schema';
import { StageUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './StageUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { StageCreateManyCreatedByInputEnvelopeObjectSchema } from './StageCreateManyCreatedByInputEnvelope.schema';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './StageUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { StageUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './StageUpdateManyWithWhereWithoutCreatedByInput.schema';
import { StageScalarWhereInputObjectSchema } from './StageScalarWhereInput.schema'

export const StageUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.StageUncheckedUpdateManyWithoutCreatedByNestedInput, Prisma.StageUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StageUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => StageUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StageUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => StageUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StageUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => StageUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StageUncheckedUpdateManyWithoutCreatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StageUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => StageUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StageUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => StageUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StageUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => StageUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
