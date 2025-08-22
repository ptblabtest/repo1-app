import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateWithoutUpdaterUserPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterUserPermissionInput.schema';
import { UserCreateOrConnectWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterUserPermissionInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterUserPermissionInput, Prisma.UserCreateNestedOneWithoutUpdaterUserPermissionInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterUserPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterUserPermissionInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterUserPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
