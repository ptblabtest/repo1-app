import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateWithoutCreatorUserPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorUserPermissionInput.schema';
import { UserCreateOrConnectWithoutCreatorUserPermissionInputObjectSchema } from './UserCreateOrConnectWithoutCreatorUserPermissionInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorUserPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorUserPermissionInput, Prisma.UserCreateNestedOneWithoutCreatorUserPermissionInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorUserPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorUserPermissionInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorUserPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorUserPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
