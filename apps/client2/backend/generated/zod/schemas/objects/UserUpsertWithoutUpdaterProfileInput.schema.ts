import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterProfileInputObjectSchema } from './UserUpdateWithoutUpdaterProfileInput.schema';
import { UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterProfileInput.schema';
import { UserCreateWithoutUpdaterProfileInputObjectSchema } from './UserCreateWithoutUpdaterProfileInput.schema';
import { UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterProfileInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterProfileInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterProfileInput, Prisma.UserUpsertWithoutUpdaterProfileInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterProfileInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
