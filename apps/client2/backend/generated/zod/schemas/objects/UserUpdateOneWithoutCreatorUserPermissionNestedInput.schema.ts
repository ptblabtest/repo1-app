import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateWithoutCreatorUserPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorUserPermissionInput.schema';
import { UserCreateOrConnectWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateOrConnectWithoutCreatorUserPermissionInput.schema';
import { UserUpsertWithoutCreatorUserPermissionInputObjectSchema } from './UserUpsertWithoutCreatorUserPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorUserPermissionInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorUserPermissionInput.schema';
import { UserUpdateWithoutCreatorUserPermissionInputObjectSchema } from './UserUpdateWithoutCreatorUserPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorUserPermissionInput.schema'

export const UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorUserPermissionNestedInput, Prisma.UserUpdateOneWithoutCreatorUserPermissionNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorUserPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorUserPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorUserPermissionNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorUserPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorUserPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema)]).optional()
}).strict();
