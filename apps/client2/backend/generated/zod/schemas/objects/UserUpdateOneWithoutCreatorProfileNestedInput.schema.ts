import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorProfileInputObjectSchema } from './UserCreateWithoutCreatorProfileInput.schema';
import { UserUncheckedCreateWithoutCreatorProfileInputObjectSchema } from './UserUncheckedCreateWithoutCreatorProfileInput.schema';
import { UserCreateOrConnectWithoutCreatorProfileInputObjectSchema } from './UserCreateOrConnectWithoutCreatorProfileInput.schema';
import { UserUpsertWithoutCreatorProfileInputObjectSchema } from './UserUpsertWithoutCreatorProfileInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorProfileInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorProfileInput.schema';
import { UserUpdateWithoutCreatorProfileInputObjectSchema } from './UserUpdateWithoutCreatorProfileInput.schema';
import { UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorProfileInput.schema'

export const UserUpdateOneWithoutCreatorProfileNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorProfileNestedInput, Prisma.UserUpdateOneWithoutCreatorProfileNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorProfileInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorProfileNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorProfileInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorProfileInputObjectSchema)]).optional()
}).strict();
