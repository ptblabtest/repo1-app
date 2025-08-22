import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorNoteInputObjectSchema } from './UserCreateWithoutCreatorNoteInput.schema';
import { UserUncheckedCreateWithoutCreatorNoteInputObjectSchema } from './UserUncheckedCreateWithoutCreatorNoteInput.schema';
import { UserCreateOrConnectWithoutCreatorNoteInputObjectSchema } from './UserCreateOrConnectWithoutCreatorNoteInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorNoteInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorNoteInput, Prisma.UserCreateNestedOneWithoutCreatorNoteInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorNoteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorNoteInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorNoteInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorNoteInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorNoteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorNoteInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
