import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorNoteInputObjectSchema } from './UserUpdateWithoutCreatorNoteInput.schema';
import { UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorNoteInput.schema';
import { UserCreateWithoutCreatorNoteInputObjectSchema } from './UserCreateWithoutCreatorNoteInput.schema';
import { UserUncheckedCreateWithoutCreatorNoteInputObjectSchema } from './UserUncheckedCreateWithoutCreatorNoteInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorNoteInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorNoteInput, Prisma.UserUpsertWithoutCreatorNoteInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorNoteInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorNoteInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorNoteInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
