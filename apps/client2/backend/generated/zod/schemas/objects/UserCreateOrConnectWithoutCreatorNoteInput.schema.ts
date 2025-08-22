import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorNoteInputObjectSchema } from './UserCreateWithoutCreatorNoteInput.schema';
import { UserUncheckedCreateWithoutCreatorNoteInputObjectSchema } from './UserUncheckedCreateWithoutCreatorNoteInput.schema'

export const UserCreateOrConnectWithoutCreatorNoteInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorNoteInput, Prisma.UserCreateOrConnectWithoutCreatorNoteInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorNoteInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorNoteInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorNoteInputObjectSchema)])
}).strict();
