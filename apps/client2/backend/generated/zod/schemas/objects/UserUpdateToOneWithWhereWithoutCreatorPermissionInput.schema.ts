import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorPermissionInputObjectSchema } from './UserUpdateWithoutCreatorPermissionInput.schema';
import { UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorPermissionInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorPermissionInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorPermissionInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorPermissionInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorPermissionInputObjectSchema)])
}).strict();
