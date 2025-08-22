import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileCreateWithoutUpdatedByInputObjectSchema } from './ProfileCreateWithoutUpdatedByInput.schema';
import { ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProfileUncheckedCreateWithoutUpdatedByInput.schema';
import { ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ProfileCreateOrConnectWithoutUpdatedByInput.schema';
import { ProfileUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ProfileUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ProfileCreateManyUpdatedByInputEnvelopeObjectSchema } from './ProfileCreateManyUpdatedByInputEnvelope.schema';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ProfileUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ProfileUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ProfileUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ProfileScalarWhereInputObjectSchema } from './ProfileScalarWhereInput.schema'

export const ProfileUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedUpdateManyWithoutUpdatedByNestedInput, Prisma.ProfileUncheckedUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProfileUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProfileUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProfileUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProfileScalarWhereInputObjectSchema), z.lazy(() => ProfileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProfileUncheckedUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProfileUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProfileUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProfileUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProfileScalarWhereInputObjectSchema), z.lazy(() => ProfileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
