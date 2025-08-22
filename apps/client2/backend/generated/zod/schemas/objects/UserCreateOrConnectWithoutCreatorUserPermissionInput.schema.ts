import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateWithoutCreatorUserPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorUserPermissionInput.schema'

export const UserCreateOrConnectWithoutCreatorUserPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorUserPermissionInput, Prisma.UserCreateOrConnectWithoutCreatorUserPermissionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorUserPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema)])
}).strict();
