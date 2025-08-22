import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterUserPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterUserPermissionInput.schema';
import { UserCreateWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateWithoutUpdaterUserPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterUserPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterUserPermissionInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterUserPermissionInput, Prisma.UserUpsertWithoutUpdaterUserPermissionInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterUserPermissionInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
