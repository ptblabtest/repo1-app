import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserCreateOrConnectWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterDepartmentPermissionInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterDepartmentPermissionInput, Prisma.UserCreateNestedOneWithoutUpdaterDepartmentPermissionInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterDepartmentPermissionInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
