import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorStageInputObjectSchema } from './UserCreateWithoutCreatorStageInput.schema';
import { UserUncheckedCreateWithoutCreatorStageInputObjectSchema } from './UserUncheckedCreateWithoutCreatorStageInput.schema';
import { UserCreateOrConnectWithoutCreatorStageInputObjectSchema } from './UserCreateOrConnectWithoutCreatorStageInput.schema';
import { UserUpsertWithoutCreatorStageInputObjectSchema } from './UserUpsertWithoutCreatorStageInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorStageInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorStageInput.schema';
import { UserUpdateWithoutCreatorStageInputObjectSchema } from './UserUpdateWithoutCreatorStageInput.schema';
import { UserUncheckedUpdateWithoutCreatorStageInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorStageInput.schema'

export const UserUpdateOneWithoutCreatorStageNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorStageNestedInput, Prisma.UserUpdateOneWithoutCreatorStageNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorStageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorStageInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorStageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorStageInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorStageNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorStageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorStageInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorStageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorStageInputObjectSchema)]).optional()
}).strict();
