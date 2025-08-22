import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateWithoutCreatorDepartmentPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorDepartmentPermissionInput.schema';
import { UserCreateOrConnectWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateOrConnectWithoutCreatorDepartmentPermissionInput.schema';
import { UserUpsertWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUpsertWithoutCreatorDepartmentPermissionInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorDepartmentPermissionInput.schema';
import { UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUpdateWithoutCreatorDepartmentPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorDepartmentPermissionInput.schema'

export const UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorDepartmentPermissionNestedInput, Prisma.UserUpdateOneWithoutCreatorDepartmentPermissionNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorDepartmentPermissionNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema)]).optional()
}).strict();
