import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutUpdatedByInputObjectSchema } from './ProfileCreateWithoutUpdatedByInput.schema';
import { ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProfileUncheckedCreateWithoutUpdatedByInput.schema'

export const ProfileCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutUpdatedByInput, Prisma.ProfileCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
