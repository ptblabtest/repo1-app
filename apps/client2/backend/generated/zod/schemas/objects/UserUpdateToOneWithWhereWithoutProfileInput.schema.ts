import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema';
import { UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema'

export const UserUpdateToOneWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProfileInput, Prisma.UserUpdateToOneWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutProfileInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
