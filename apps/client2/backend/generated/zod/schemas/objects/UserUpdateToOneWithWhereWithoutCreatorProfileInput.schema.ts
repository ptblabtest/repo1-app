import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorProfileInputObjectSchema } from './UserUpdateWithoutCreatorProfileInput.schema';
import { UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorProfileInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorProfileInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorProfileInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorProfileInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorProfileInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema)])
}).strict();
