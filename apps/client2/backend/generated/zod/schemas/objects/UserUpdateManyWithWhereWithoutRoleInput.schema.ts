import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutRoleInputObjectSchema } from './UserUncheckedUpdateManyWithoutRoleInput.schema'

export const UserUpdateManyWithWhereWithoutRoleInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutRoleInput, Prisma.UserUpdateManyWithWhereWithoutRoleInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutRoleInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutRoleInputObjectZodSchema = z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutRoleInputObjectSchema)])
}).strict();
