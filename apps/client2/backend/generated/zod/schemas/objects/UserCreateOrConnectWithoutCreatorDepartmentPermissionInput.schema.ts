import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateWithoutCreatorDepartmentPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorDepartmentPermissionInput.schema'

export const UserCreateOrConnectWithoutCreatorDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorDepartmentPermissionInput, Prisma.UserCreateOrConnectWithoutCreatorDepartmentPermissionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorDepartmentPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema)])
}).strict();
