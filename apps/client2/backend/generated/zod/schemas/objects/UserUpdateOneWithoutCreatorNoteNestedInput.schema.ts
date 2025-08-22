import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorNoteInputObjectSchema } from './UserCreateWithoutCreatorNoteInput.schema';
import { UserUncheckedCreateWithoutCreatorNoteInputObjectSchema } from './UserUncheckedCreateWithoutCreatorNoteInput.schema';
import { UserCreateOrConnectWithoutCreatorNoteInputObjectSchema } from './UserCreateOrConnectWithoutCreatorNoteInput.schema';
import { UserUpsertWithoutCreatorNoteInputObjectSchema } from './UserUpsertWithoutCreatorNoteInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorNoteInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorNoteInput.schema';
import { UserUpdateWithoutCreatorNoteInputObjectSchema } from './UserUpdateWithoutCreatorNoteInput.schema';
import { UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorNoteInput.schema'

export const UserUpdateOneWithoutCreatorNoteNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorNoteNestedInput, Prisma.UserUpdateOneWithoutCreatorNoteNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorNoteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorNoteInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorNoteInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorNoteNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorNoteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorNoteInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorNoteInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema)]).optional()
}).strict();
