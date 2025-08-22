import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorPermissionInputObjectSchema } from './UserCreateWithoutCreatorPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorPermissionInput.schema';
import { UserCreateOrConnectWithoutCreatorPermissionInputObjectSchema } from './UserCreateOrConnectWithoutCreatorPermissionInput.schema';
import { UserUpsertWithoutCreatorPermissionInputObjectSchema } from './UserUpsertWithoutCreatorPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorPermissionInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorPermissionInput.schema';
import { UserUpdateWithoutCreatorPermissionInputObjectSchema } from './UserUpdateWithoutCreatorPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorPermissionInput.schema'

export const UserUpdateOneWithoutCreatorPermissionNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorPermissionNestedInput, Prisma.UserUpdateOneWithoutCreatorPermissionNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorPermissionNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema)]).optional()
}).strict();
