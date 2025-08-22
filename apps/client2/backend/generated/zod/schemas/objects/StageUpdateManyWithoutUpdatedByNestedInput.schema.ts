import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateWithoutUpdatedByInputObjectSchema } from './StageCreateWithoutUpdatedByInput.schema';
import { StageUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StageUncheckedCreateWithoutUpdatedByInput.schema';
import { StageCreateOrConnectWithoutUpdatedByInputObjectSchema } from './StageCreateOrConnectWithoutUpdatedByInput.schema';
import { StageUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './StageUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { StageCreateManyUpdatedByInputEnvelopeObjectSchema } from './StageCreateManyUpdatedByInputEnvelope.schema';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './StageUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { StageUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './StageUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { StageScalarWhereInputObjectSchema } from './StageScalarWhereInput.schema'

export const StageUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.StageUpdateManyWithoutUpdatedByNestedInput, Prisma.StageUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StageUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StageUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StageUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StageUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StageUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StageUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StageUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
