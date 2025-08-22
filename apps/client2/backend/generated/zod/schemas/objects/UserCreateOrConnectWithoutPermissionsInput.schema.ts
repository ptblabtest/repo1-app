import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPermissionsInputObjectSchema } from './UserCreateWithoutPermissionsInput.schema';
import { UserUncheckedCreateWithoutPermissionsInputObjectSchema } from './UserUncheckedCreateWithoutPermissionsInput.schema'

export const UserCreateOrConnectWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPermissionsInput, Prisma.UserCreateOrConnectWithoutPermissionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPermissionsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPermissionsInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPermissionsInputObjectSchema)])
}).strict();
