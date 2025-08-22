import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRoleInputObjectSchema } from './UserUpdateWithoutRoleInput.schema';
import { UserUncheckedUpdateWithoutRoleInputObjectSchema } from './UserUncheckedUpdateWithoutRoleInput.schema';
import { UserCreateWithoutRoleInputObjectSchema } from './UserCreateWithoutRoleInput.schema';
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from './UserUncheckedCreateWithoutRoleInput.schema'

export const UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutRoleInput, Prisma.UserUpsertWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutRoleInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRoleInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutRoleInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutRoleInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRoleInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
