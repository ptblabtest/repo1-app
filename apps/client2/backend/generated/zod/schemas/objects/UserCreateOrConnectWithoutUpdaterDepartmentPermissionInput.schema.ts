import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterDepartmentPermissionInput.schema'

export const UserCreateOrConnectWithoutUpdaterDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterDepartmentPermissionInput, Prisma.UserCreateOrConnectWithoutUpdaterDepartmentPermissionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterDepartmentPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema)])
}).strict();
