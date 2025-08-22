import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutPermissionsInputObjectSchema } from './UserUpdateWithoutPermissionsInput.schema';
import { UserUncheckedUpdateWithoutPermissionsInputObjectSchema } from './UserUncheckedUpdateWithoutPermissionsInput.schema';
import { UserCreateWithoutPermissionsInputObjectSchema } from './UserCreateWithoutPermissionsInput.schema';
import { UserUncheckedCreateWithoutPermissionsInputObjectSchema } from './UserUncheckedCreateWithoutPermissionsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPermissionsInput, Prisma.UserUpsertWithoutPermissionsInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPermissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPermissionsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPermissionsInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPermissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPermissionsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
