import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateWithoutTypeInputObjectSchema } from './StageCreateWithoutTypeInput.schema';
import { StageUncheckedCreateWithoutTypeInputObjectSchema } from './StageUncheckedCreateWithoutTypeInput.schema';
import { StageCreateOrConnectWithoutTypeInputObjectSchema } from './StageCreateOrConnectWithoutTypeInput.schema';
import { StageUpsertWithWhereUniqueWithoutTypeInputObjectSchema } from './StageUpsertWithWhereUniqueWithoutTypeInput.schema';
import { StageCreateManyTypeInputEnvelopeObjectSchema } from './StageCreateManyTypeInputEnvelope.schema';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageUpdateWithWhereUniqueWithoutTypeInputObjectSchema } from './StageUpdateWithWhereUniqueWithoutTypeInput.schema';
import { StageUpdateManyWithWhereWithoutTypeInputObjectSchema } from './StageUpdateManyWithWhereWithoutTypeInput.schema';
import { StageScalarWhereInputObjectSchema } from './StageScalarWhereInput.schema'

export const StageUpdateManyWithoutTypeNestedInputObjectSchema: z.ZodType<Prisma.StageUpdateManyWithoutTypeNestedInput, Prisma.StageUpdateManyWithoutTypeNestedInput> = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutTypeInputObjectSchema), z.lazy(() => StageCreateWithoutTypeInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutTypeInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StageUpsertWithWhereUniqueWithoutTypeInputObjectSchema), z.lazy(() => StageUpsertWithWhereUniqueWithoutTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StageUpdateWithWhereUniqueWithoutTypeInputObjectSchema), z.lazy(() => StageUpdateWithWhereUniqueWithoutTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StageUpdateManyWithWhereWithoutTypeInputObjectSchema), z.lazy(() => StageUpdateManyWithWhereWithoutTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StageUpdateManyWithoutTypeNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutTypeInputObjectSchema), z.lazy(() => StageCreateWithoutTypeInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutTypeInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StageUpsertWithWhereUniqueWithoutTypeInputObjectSchema), z.lazy(() => StageUpsertWithWhereUniqueWithoutTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StageUpdateWithWhereUniqueWithoutTypeInputObjectSchema), z.lazy(() => StageUpdateWithWhereUniqueWithoutTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StageUpdateManyWithWhereWithoutTypeInputObjectSchema), z.lazy(() => StageUpdateManyWithWhereWithoutTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StageScalarWhereInputObjectSchema), z.lazy(() => StageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
