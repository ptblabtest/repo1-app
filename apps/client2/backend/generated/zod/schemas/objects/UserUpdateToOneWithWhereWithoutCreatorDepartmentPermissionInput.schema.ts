import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUpdateWithoutCreatorDepartmentPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorDepartmentPermissionInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorDepartmentPermissionInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorDepartmentPermissionInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorDepartmentPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentPermissionInputObjectSchema)])
}).strict();
