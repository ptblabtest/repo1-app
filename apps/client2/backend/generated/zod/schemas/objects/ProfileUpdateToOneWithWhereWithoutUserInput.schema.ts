import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema';
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema'

export const ProfileUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ProfileUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
