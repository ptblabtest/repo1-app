import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema';
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema';
import { ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema';
import { ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema';
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

export const ProfileUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutUserInput, Prisma.ProfileUpsertWithoutUserInput> = z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutUserInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
