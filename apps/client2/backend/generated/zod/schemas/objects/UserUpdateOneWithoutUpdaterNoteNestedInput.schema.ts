import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterNoteInputObjectSchema } from './UserCreateWithoutUpdaterNoteInput.schema';
import { UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterNoteInput.schema';
import { UserCreateOrConnectWithoutUpdaterNoteInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterNoteInput.schema';
import { UserUpsertWithoutUpdaterNoteInputObjectSchema } from './UserUpsertWithoutUpdaterNoteInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterNoteInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterNoteInput.schema';
import { UserUpdateWithoutUpdaterNoteInputObjectSchema } from './UserUpdateWithoutUpdaterNoteInput.schema';
import { UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterNoteInput.schema'

export const UserUpdateOneWithoutUpdaterNoteNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterNoteNestedInput, Prisma.UserUpdateOneWithoutUpdaterNoteNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterNoteInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterNoteInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterNoteNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterNoteInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterNoteInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema)]).optional()
}).strict();
