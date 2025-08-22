import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorUserPermissionInputObjectSchema } from './UserUpdateWithoutCreatorUserPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorUserPermissionInput.schema';
import { UserCreateWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateWithoutCreatorUserPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorUserPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorUserPermissionInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorUserPermissionInput, Prisma.UserUpsertWithoutCreatorUserPermissionInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorUserPermissionInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
