import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUpdateWithoutCreatorDepartmentPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorDepartmentPermissionInput.schema';
import { UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateWithoutCreatorDepartmentPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorDepartmentPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorDepartmentPermissionInput, Prisma.UserUpsertWithoutCreatorDepartmentPermissionInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorDepartmentPermissionInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
