import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateWithoutUpdatedByInputObjectSchema } from './ProfileUpdateWithoutUpdatedByInput.schema';
import { ProfileUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ProfileUncheckedUpdateWithoutUpdatedByInput.schema'

export const ProfileUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.ProfileUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ProfileUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
