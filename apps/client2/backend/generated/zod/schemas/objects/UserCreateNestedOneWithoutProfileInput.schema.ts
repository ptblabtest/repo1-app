import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema';
import { UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProfileInput, Prisma.UserCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutProfileInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
