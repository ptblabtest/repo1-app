import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutPermissionsInputObjectSchema } from './UserCreateWithoutPermissionsInput.schema';
import { UserUncheckedCreateWithoutPermissionsInputObjectSchema } from './UserUncheckedCreateWithoutPermissionsInput.schema';
import { UserCreateOrConnectWithoutPermissionsInputObjectSchema } from './UserCreateOrConnectWithoutPermissionsInput.schema';
import { UserUpsertWithoutPermissionsInputObjectSchema } from './UserUpsertWithoutPermissionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPermissionsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPermissionsInput.schema';
import { UserUpdateWithoutPermissionsInputObjectSchema } from './UserUpdateWithoutPermissionsInput.schema';
import { UserUncheckedUpdateWithoutPermissionsInputObjectSchema } from './UserUncheckedUpdateWithoutPermissionsInput.schema'

export const UserUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPermissionsNestedInput, Prisma.UserUpdateOneRequiredWithoutPermissionsNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPermissionsInputObjectSchema), z.lazy(() => UserUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPermissionsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPermissionsNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPermissionsInputObjectSchema), z.lazy(() => UserUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPermissionsInputObjectSchema)]).optional()
}).strict();
