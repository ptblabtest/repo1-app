import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterStageInputObjectSchema } from './UserUpdateWithoutUpdaterStageInput.schema';
import { UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterStageInput.schema';
import { UserCreateWithoutUpdaterStageInputObjectSchema } from './UserCreateWithoutUpdaterStageInput.schema';
import { UserUncheckedCreateWithoutUpdaterStageInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterStageInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterStageInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterStageInput, Prisma.UserUpsertWithoutUpdaterStageInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterStageInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterStageInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterStageInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
