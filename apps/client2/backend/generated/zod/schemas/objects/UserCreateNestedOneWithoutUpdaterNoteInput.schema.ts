import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterNoteInputObjectSchema } from './UserCreateWithoutUpdaterNoteInput.schema';
import { UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterNoteInput.schema';
import { UserCreateOrConnectWithoutUpdaterNoteInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterNoteInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterNoteInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterNoteInput, Prisma.UserCreateNestedOneWithoutUpdaterNoteInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterNoteInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterNoteInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterNoteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterNoteInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
