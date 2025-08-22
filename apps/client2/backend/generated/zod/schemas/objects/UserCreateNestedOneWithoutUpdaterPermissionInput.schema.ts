import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterPermissionInputObjectSchema } from './UserCreateWithoutUpdaterPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterPermissionInput.schema';
import { UserCreateOrConnectWithoutUpdaterPermissionInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterPermissionInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterPermissionInput, Prisma.UserCreateNestedOneWithoutUpdaterPermissionInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterPermissionInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
