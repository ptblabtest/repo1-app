import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorPermissionInputObjectSchema } from './UserCreateWithoutCreatorPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorPermissionInput.schema';
import { UserCreateOrConnectWithoutCreatorPermissionInputObjectSchema } from './UserCreateOrConnectWithoutCreatorPermissionInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorPermissionInput, Prisma.UserCreateNestedOneWithoutCreatorPermissionInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorPermissionInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
