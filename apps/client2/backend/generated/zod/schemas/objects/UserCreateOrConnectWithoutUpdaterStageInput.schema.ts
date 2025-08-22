import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterStageInputObjectSchema } from './UserCreateWithoutUpdaterStageInput.schema';
import { UserUncheckedCreateWithoutUpdaterStageInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterStageInput.schema'

export const UserCreateOrConnectWithoutUpdaterStageInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterStageInput, Prisma.UserCreateOrConnectWithoutUpdaterStageInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterStageInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterStageInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterStageInputObjectSchema)])
}).strict();
