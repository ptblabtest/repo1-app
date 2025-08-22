import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterPermissionInputObjectSchema } from './UserCreateWithoutUpdaterPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterPermissionInput.schema'

export const UserCreateOrConnectWithoutUpdaterPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterPermissionInput, Prisma.UserCreateOrConnectWithoutUpdaterPermissionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema)])
}).strict();
