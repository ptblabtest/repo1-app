import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateWithoutCreatedByInputObjectSchema } from './ProfileUpdateWithoutCreatedByInput.schema';
import { ProfileUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProfileUncheckedUpdateWithoutCreatedByInput.schema'

export const ProfileUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ProfileUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.ProfileUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ProfileUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
