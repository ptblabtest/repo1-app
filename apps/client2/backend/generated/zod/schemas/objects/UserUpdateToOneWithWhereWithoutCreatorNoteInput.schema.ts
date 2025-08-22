import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorNoteInputObjectSchema } from './UserUpdateWithoutCreatorNoteInput.schema';
import { UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorNoteInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorNoteInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorNoteInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorNoteInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorNoteInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorNoteInputObjectSchema)])
}).strict();
