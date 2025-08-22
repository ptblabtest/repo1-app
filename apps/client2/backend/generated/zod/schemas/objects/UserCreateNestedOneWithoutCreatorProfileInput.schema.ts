import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorProfileInputObjectSchema } from './UserCreateWithoutCreatorProfileInput.schema';
import { UserUncheckedCreateWithoutCreatorProfileInputObjectSchema } from './UserUncheckedCreateWithoutCreatorProfileInput.schema';
import { UserCreateOrConnectWithoutCreatorProfileInputObjectSchema } from './UserCreateOrConnectWithoutCreatorProfileInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorProfileInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorProfileInput, Prisma.UserCreateNestedOneWithoutCreatorProfileInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorProfileInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
