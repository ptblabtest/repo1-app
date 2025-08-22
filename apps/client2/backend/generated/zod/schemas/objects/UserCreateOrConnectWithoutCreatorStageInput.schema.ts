import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorStageInputObjectSchema } from './UserCreateWithoutCreatorStageInput.schema';
import { UserUncheckedCreateWithoutCreatorStageInputObjectSchema } from './UserUncheckedCreateWithoutCreatorStageInput.schema'

export const UserCreateOrConnectWithoutCreatorStageInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorStageInput, Prisma.UserCreateOrConnectWithoutCreatorStageInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorStageInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorStageInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorStageInputObjectSchema)])
}).strict();
