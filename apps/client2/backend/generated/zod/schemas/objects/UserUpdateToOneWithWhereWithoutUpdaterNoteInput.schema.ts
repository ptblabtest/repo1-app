import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterNoteInputObjectSchema } from './UserUpdateWithoutUpdaterNoteInput.schema';
import { UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterNoteInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterNoteInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterNoteInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterNoteInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterNoteInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterNoteInputObjectSchema)])
}).strict();
