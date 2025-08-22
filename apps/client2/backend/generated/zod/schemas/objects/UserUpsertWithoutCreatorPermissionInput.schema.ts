import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorPermissionInputObjectSchema } from './UserUpdateWithoutCreatorPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorPermissionInput.schema';
import { UserCreateWithoutCreatorPermissionInputObjectSchema } from './UserCreateWithoutCreatorPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorPermissionInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorPermissionInput, Prisma.UserUpsertWithoutCreatorPermissionInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorPermissionInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
