import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPermissionsInputObjectSchema } from './UserUpdateWithoutPermissionsInput.schema';
import { UserUncheckedUpdateWithoutPermissionsInputObjectSchema } from './UserUncheckedUpdateWithoutPermissionsInput.schema'

export const UserUpdateToOneWithWhereWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPermissionsInput, Prisma.UserUpdateToOneWithWhereWithoutPermissionsInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPermissionsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPermissionsInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPermissionsInputObjectSchema)])
}).strict();
