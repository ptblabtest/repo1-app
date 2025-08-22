import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileCreateWithoutCreatedByInputObjectSchema } from './ProfileCreateWithoutCreatedByInput.schema';
import { ProfileUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProfileUncheckedCreateWithoutCreatedByInput.schema';
import { ProfileCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProfileCreateOrConnectWithoutCreatedByInput.schema';
import { ProfileCreateManyCreatedByInputEnvelopeObjectSchema } from './ProfileCreateManyCreatedByInputEnvelope.schema';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

export const ProfileUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedManyWithoutCreatedByInput, Prisma.ProfileUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ProfileUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProfileUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ProfileUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
