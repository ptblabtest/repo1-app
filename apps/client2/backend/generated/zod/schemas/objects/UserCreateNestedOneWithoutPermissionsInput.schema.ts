import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutPermissionsInputObjectSchema } from './UserCreateWithoutPermissionsInput.schema';
import { UserUncheckedCreateWithoutPermissionsInputObjectSchema } from './UserUncheckedCreateWithoutPermissionsInput.schema';
import { UserCreateOrConnectWithoutPermissionsInputObjectSchema } from './UserCreateOrConnectWithoutPermissionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPermissionsInput, Prisma.UserCreateNestedOneWithoutPermissionsInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPermissionsInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
