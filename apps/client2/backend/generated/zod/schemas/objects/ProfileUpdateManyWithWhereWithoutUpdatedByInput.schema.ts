import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileScalarWhereInputObjectSchema } from './ProfileScalarWhereInput.schema';
import { ProfileUpdateManyMutationInputObjectSchema } from './ProfileUpdateManyMutationInput.schema';
import { ProfileUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ProfileUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const ProfileUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileUpdateManyWithWhereWithoutUpdatedByInput, Prisma.ProfileUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ProfileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateManyMutationInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ProfileUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ProfileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateManyMutationInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
