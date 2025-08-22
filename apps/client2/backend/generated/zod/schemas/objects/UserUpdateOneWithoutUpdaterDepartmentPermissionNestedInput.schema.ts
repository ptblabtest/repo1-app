import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserCreateOrConnectWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUpsertWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUpsertWithoutUpdaterDepartmentPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInput.schema'

export const UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInput, Prisma.UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterDepartmentPermissionNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterDepartmentPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema)]).optional()
}).strict();
