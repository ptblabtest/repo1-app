import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterNoteInputObjectSchema } from './UserCreateWithoutUpdaterNoteInput.schema';
import { UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterNoteInput.schema'

export const UserCreateOrConnectWithoutUpdaterNoteInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterNoteInput, Prisma.UserCreateOrConnectWithoutUpdaterNoteInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterNoteInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema)])
}).strict();
