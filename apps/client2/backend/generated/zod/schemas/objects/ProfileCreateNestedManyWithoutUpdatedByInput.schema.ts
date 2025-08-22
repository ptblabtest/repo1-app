import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileCreateWithoutUpdatedByInputObjectSchema } from './ProfileCreateWithoutUpdatedByInput.schema';
import { ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProfileUncheckedCreateWithoutUpdatedByInput.schema';
import { ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ProfileCreateOrConnectWithoutUpdatedByInput.schema';
import { ProfileCreateManyUpdatedByInputEnvelopeObjectSchema } from './ProfileCreateManyUpdatedByInputEnvelope.schema';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

export const ProfileCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedManyWithoutUpdatedByInput, Prisma.ProfileCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProfileCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
