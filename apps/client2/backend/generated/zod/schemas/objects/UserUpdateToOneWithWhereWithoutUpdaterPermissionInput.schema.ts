import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterPermissionInputObjectSchema } from './UserUpdateWithoutUpdaterPermissionInput.schema';
import { UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterPermissionInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterPermissionInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterPermissionInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterPermissionInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterPermissionInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterPermissionInputObjectSchema)])
}).strict();
