import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserCreateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterDepartmentPermissionInput, Prisma.UserUpsertWithoutUpdaterDepartmentPermissionInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterDepartmentPermissionInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
