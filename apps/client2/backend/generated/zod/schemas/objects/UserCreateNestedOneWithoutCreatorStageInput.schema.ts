import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorStageInputObjectSchema } from './UserCreateWithoutCreatorStageInput.schema';
import { UserUncheckedCreateWithoutCreatorStageInputObjectSchema } from './UserUncheckedCreateWithoutCreatorStageInput.schema';
import { UserCreateOrConnectWithoutCreatorStageInputObjectSchema } from './UserCreateOrConnectWithoutCreatorStageInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorStageInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorStageInput, Prisma.UserCreateNestedOneWithoutCreatorStageInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorStageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorStageInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorStageInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorStageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorStageInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
