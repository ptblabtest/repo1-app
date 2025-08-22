import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema';
import { UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema';
import { UserUpsertWithoutProfileInputObjectSchema } from './UserUpsertWithoutProfileInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutProfileInputObjectSchema } from './UserUpdateToOneWithWhereWithoutProfileInput.schema';
import { UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema';
import { UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema'

export const UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProfileNestedInput, Prisma.UserUpdateOneRequiredWithoutProfileNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutProfileInputObjectSchema), z.lazy(() => UserUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutProfileNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutProfileInputObjectSchema), z.lazy(() => UserUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema)]).optional()
}).strict();
