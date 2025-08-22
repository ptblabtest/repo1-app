import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileScalarWhereInputObjectSchema } from './ProfileScalarWhereInput.schema';
import { ProfileUpdateManyMutationInputObjectSchema } from './ProfileUpdateManyMutationInput.schema';
import { ProfileUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './ProfileUncheckedUpdateManyWithoutCreatedByInput.schema'

export const ProfileUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ProfileUpdateManyWithWhereWithoutCreatedByInput, Prisma.ProfileUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ProfileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateManyMutationInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const ProfileUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateManyMutationInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
