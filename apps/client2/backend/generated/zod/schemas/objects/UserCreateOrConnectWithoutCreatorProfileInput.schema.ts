import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorProfileInputObjectSchema } from './UserCreateWithoutCreatorProfileInput.schema';
import { UserUncheckedCreateWithoutCreatorProfileInputObjectSchema } from './UserUncheckedCreateWithoutCreatorProfileInput.schema'

export const UserCreateOrConnectWithoutCreatorProfileInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorProfileInput, Prisma.UserCreateOrConnectWithoutCreatorProfileInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorProfileInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorProfileInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorProfileInputObjectSchema)])
}).strict();
