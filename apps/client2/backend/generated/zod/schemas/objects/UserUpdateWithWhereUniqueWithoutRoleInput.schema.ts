import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRoleInputObjectSchema } from './UserUpdateWithoutRoleInput.schema';
import { UserUncheckedUpdateWithoutRoleInputObjectSchema } from './UserUncheckedUpdateWithoutRoleInput.schema'

export const UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutRoleInput, Prisma.UserUpdateWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutRoleInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoleInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutRoleInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutRoleInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoleInputObjectSchema)])
}).strict();
