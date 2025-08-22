import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterUserPermissionInputObjectSchema } from './UserCreateWithoutUpdaterUserPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterUserPermissionInput.schema'

export const UserCreateOrConnectWithoutUpdaterUserPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterUserPermissionInput, Prisma.UserCreateOrConnectWithoutUpdaterUserPermissionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterUserPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterUserPermissionInputObjectSchema)])
}).strict();
