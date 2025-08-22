import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateWithoutUpdatedByInputObjectSchema } from './ProfileUpdateWithoutUpdatedByInput.schema';
import { ProfileUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ProfileUncheckedUpdateWithoutUpdatedByInput.schema';
import { ProfileCreateWithoutUpdatedByInputObjectSchema } from './ProfileCreateWithoutUpdatedByInput.schema';
import { ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProfileUncheckedCreateWithoutUpdatedByInput.schema'

export const ProfileUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.ProfileUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProfileUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ProfileUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProfileUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
