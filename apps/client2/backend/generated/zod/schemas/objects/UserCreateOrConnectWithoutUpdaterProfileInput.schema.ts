import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterProfileInputObjectSchema } from './UserCreateWithoutUpdaterProfileInput.schema';
import { UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterProfileInput.schema'

export const UserCreateOrConnectWithoutUpdaterProfileInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterProfileInput, Prisma.UserCreateOrConnectWithoutUpdaterProfileInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterProfileInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema)])
}).strict();
