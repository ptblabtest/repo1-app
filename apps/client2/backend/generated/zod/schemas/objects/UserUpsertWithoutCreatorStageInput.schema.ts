import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorStageInputObjectSchema } from './UserUpdateWithoutCreatorStageInput.schema';
import { UserUncheckedUpdateWithoutCreatorStageInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorStageInput.schema';
import { UserCreateWithoutCreatorStageInputObjectSchema } from './UserCreateWithoutCreatorStageInput.schema';
import { UserUncheckedCreateWithoutCreatorStageInputObjectSchema } from './UserUncheckedCreateWithoutCreatorStageInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorStageInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorStageInput, Prisma.UserUpsertWithoutCreatorStageInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorStageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorStageInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorStageInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorStageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorStageInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
