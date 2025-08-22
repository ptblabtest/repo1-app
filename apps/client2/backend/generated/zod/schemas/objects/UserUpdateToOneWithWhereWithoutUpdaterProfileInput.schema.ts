import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterProfileInputObjectSchema } from './UserUpdateWithoutUpdaterProfileInput.schema';
import { UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterProfileInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterProfileInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterProfileInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterProfileInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterProfileInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema)])
}).strict();
