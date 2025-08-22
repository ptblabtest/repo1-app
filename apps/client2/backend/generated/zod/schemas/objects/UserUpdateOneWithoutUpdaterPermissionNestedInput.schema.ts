import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterPermissionInputObjectSchema } from './UserCreateWithoutUpdaterPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterPermissionInput.schema';
import { UserCreateOrConnectWithoutUpdaterPermissionInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterPermissionInput.schema';
import { UserUpsertWithoutUpdaterPermissionInputObjectSchema } from './UserUpsertWithoutUpdaterPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterPermissionInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterPermissionInput.schema';
import { UserUpdateWithoutUpdaterPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterPermissionInput.schema'

export const UserUpdateOneWithoutUpdaterPermissionNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterPermissionNestedInput, Prisma.UserUpdateOneWithoutUpdaterPermissionNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterPermissionNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema)]).optional()
}).strict();
