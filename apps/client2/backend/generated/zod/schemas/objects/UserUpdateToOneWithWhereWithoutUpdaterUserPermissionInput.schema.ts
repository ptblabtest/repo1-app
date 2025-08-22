import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterUserPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterUserPermissionInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterUserPermissionInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterUserPermissionInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterUserPermissionInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterUserPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterUserPermissionInputObjectSchema)])
}).strict();
