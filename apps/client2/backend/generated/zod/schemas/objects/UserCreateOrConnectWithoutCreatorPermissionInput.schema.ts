import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorPermissionInputObjectSchema } from './UserCreateWithoutCreatorPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorPermissionInput.schema'

export const UserCreateOrConnectWithoutCreatorPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorPermissionInput, Prisma.UserCreateOrConnectWithoutCreatorPermissionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema)])
}).strict();
