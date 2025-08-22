import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateWithoutUpdaterUserPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterUserPermissionInput.schema';
import { UserCreateOrConnectWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterUserPermissionInput.schema';
import { UserUpsertWithoutUpdaterUserPermissionInputObjectSchema } from './UserUpsertWithoutUpdaterUserPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterUserPermissionInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterUserPermissionInput.schema';
import { UserUpdateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterUserPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterUserPermissionInput.schema'

export const UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterUserPermissionNestedInput, Prisma.UserUpdateOneWithoutUpdaterUserPermissionNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterUserPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterUserPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterUserPermissionNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterUserPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterUserPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema)]).optional()
}).strict();
