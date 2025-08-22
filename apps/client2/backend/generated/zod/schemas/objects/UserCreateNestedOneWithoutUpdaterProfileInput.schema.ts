import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterProfileInputObjectSchema } from './UserCreateWithoutUpdaterProfileInput.schema';
import { UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterProfileInput.schema';
import { UserCreateOrConnectWithoutUpdaterProfileInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterProfileInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterProfileInput, Prisma.UserCreateNestedOneWithoutUpdaterProfileInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterProfileInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
