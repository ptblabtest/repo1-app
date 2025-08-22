import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema';
import { ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema';
import { ProfileCreateOrConnectWithoutUserInputObjectSchema } from './ProfileCreateOrConnectWithoutUserInput.schema';
import { ProfileUpsertWithoutUserInputObjectSchema } from './ProfileUpsertWithoutUserInput.schema';
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutUserInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutUserInput.schema';
import { ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema';
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema'

export const ProfileUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneWithoutUserNestedInput, Prisma.ProfileUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneWithoutUserNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
