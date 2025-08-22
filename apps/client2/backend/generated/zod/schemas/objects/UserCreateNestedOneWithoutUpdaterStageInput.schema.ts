import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterStageInputObjectSchema } from './UserCreateWithoutUpdaterStageInput.schema';
import { UserUncheckedCreateWithoutUpdaterStageInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterStageInput.schema';
import { UserCreateOrConnectWithoutUpdaterStageInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterStageInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterStageInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterStageInput, Prisma.UserCreateNestedOneWithoutUpdaterStageInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterStageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterStageInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterStageInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterStageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterStageInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
