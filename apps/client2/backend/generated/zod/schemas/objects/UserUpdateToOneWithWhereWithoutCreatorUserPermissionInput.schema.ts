import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorUserPermissionInputObjectSchema } from './UserUpdateWithoutCreatorUserPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorUserPermissionInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorUserPermissionInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorUserPermissionInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorUserPermissionInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorUserPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorUserPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorUserPermissionInputObjectSchema)])
}).strict();
