import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema';
import { UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema';
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutProfileInput, Prisma.UserUpsertWithoutProfileInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutProfileInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
