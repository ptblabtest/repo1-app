import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterNoteInputObjectSchema } from './UserUpdateWithoutUpdaterNoteInput.schema';
import { UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterNoteInput.schema';
import { UserCreateWithoutUpdaterNoteInputObjectSchema } from './UserCreateWithoutUpdaterNoteInput.schema';
import { UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterNoteInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterNoteInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterNoteInput, Prisma.UserUpsertWithoutUpdaterNoteInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterNoteInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
