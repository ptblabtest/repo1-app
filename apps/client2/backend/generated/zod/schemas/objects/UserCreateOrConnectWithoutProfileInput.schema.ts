import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema'

export const UserCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProfileInput, Prisma.UserCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutProfileInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
