import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterProfileInputObjectSchema } from './UserCreateWithoutUpdaterProfileInput.schema';
import { UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterProfileInput.schema';
import { UserCreateOrConnectWithoutUpdaterProfileInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterProfileInput.schema';
import { UserUpsertWithoutUpdaterProfileInputObjectSchema } from './UserUpsertWithoutUpdaterProfileInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterProfileInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterProfileInput.schema';
import { UserUpdateWithoutUpdaterProfileInputObjectSchema } from './UserUpdateWithoutUpdaterProfileInput.schema';
import { UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterProfileInput.schema'

export const UserUpdateOneWithoutUpdaterProfileNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterProfileNestedInput, Prisma.UserUpdateOneWithoutUpdaterProfileNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterProfileInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterProfileNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterProfileInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterProfileInputObjectSchema)]).optional()
}).strict();
