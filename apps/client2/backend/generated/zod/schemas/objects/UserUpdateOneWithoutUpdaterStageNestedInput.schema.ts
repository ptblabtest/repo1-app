import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterStageInputObjectSchema } from './UserCreateWithoutUpdaterStageInput.schema';
import { UserUncheckedCreateWithoutUpdaterStageInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterStageInput.schema';
import { UserCreateOrConnectWithoutUpdaterStageInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterStageInput.schema';
import { UserUpsertWithoutUpdaterStageInputObjectSchema } from './UserUpsertWithoutUpdaterStageInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterStageInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterStageInput.schema';
import { UserUpdateWithoutUpdaterStageInputObjectSchema } from './UserUpdateWithoutUpdaterStageInput.schema';
import { UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterStageInput.schema'

export const UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterStageNestedInput, Prisma.UserUpdateOneWithoutUpdaterStageNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterStageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterStageInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterStageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterStageNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterStageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterStageInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterStageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema)]).optional()
}).strict();
