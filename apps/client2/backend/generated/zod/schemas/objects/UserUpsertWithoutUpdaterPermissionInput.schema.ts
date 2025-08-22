import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterPermissionInput.schema';
import { UserCreateWithoutUpdaterPermissionInputObjectSchema } from './UserCreateWithoutUpdaterPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterPermissionInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterPermissionInput, Prisma.UserUpsertWithoutUpdaterPermissionInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterPermissionInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
