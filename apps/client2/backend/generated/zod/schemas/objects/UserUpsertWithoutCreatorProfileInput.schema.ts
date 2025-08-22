import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorProfileInputObjectSchema } from './UserUpdateWithoutCreatorProfileInput.schema';
import { UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorProfileInput.schema';
import { UserCreateWithoutCreatorProfileInputObjectSchema } from './UserCreateWithoutCreatorProfileInput.schema';
import { UserUncheckedCreateWithoutCreatorProfileInputObjectSchema } from './UserUncheckedCreateWithoutCreatorProfileInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorProfileInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorProfileInput, Prisma.UserUpsertWithoutCreatorProfileInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorProfileInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorProfileInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorProfileInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
