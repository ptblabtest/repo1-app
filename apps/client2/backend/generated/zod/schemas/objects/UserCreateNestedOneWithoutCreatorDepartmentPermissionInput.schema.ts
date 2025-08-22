import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateWithoutCreatorDepartmentPermissionInput.schema';
import { UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUncheckedCreateWithoutCreatorDepartmentPermissionInput.schema';
import { UserCreateOrConnectWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserCreateOrConnectWithoutCreatorDepartmentPermissionInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorDepartmentPermissionInput, Prisma.UserCreateNestedOneWithoutCreatorDepartmentPermissionInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorDepartmentPermissionInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorDepartmentPermissionInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
