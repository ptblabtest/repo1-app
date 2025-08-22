import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateWithoutCreatedByInputObjectSchema } from './ProfileUpdateWithoutCreatedByInput.schema';
import { ProfileUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProfileUncheckedUpdateWithoutCreatedByInput.schema';
import { ProfileCreateWithoutCreatedByInputObjectSchema } from './ProfileCreateWithoutCreatedByInput.schema';
import { ProfileUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProfileUncheckedCreateWithoutCreatedByInput.schema'

export const ProfileUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.ProfileUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProfileUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ProfileUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProfileUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
