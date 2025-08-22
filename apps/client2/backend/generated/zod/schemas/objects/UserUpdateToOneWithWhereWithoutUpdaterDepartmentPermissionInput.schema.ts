import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterDepartmentPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterDepartmentPermissionInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterDepartmentPermissionInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterDepartmentPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentPermissionInputObjectSchema)])
}).strict();
