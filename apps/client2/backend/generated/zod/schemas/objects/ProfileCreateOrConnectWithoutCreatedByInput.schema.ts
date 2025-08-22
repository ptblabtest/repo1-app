import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutCreatedByInputObjectSchema } from './ProfileCreateWithoutCreatedByInput.schema';
import { ProfileUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProfileUncheckedCreateWithoutCreatedByInput.schema'

export const ProfileCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutCreatedByInput, Prisma.ProfileCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
