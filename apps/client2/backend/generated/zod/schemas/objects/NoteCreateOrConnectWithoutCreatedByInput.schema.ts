import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteCreateWithoutCreatedByInputObjectSchema } from './NoteCreateWithoutCreatedByInput.schema';
import { NoteUncheckedCreateWithoutCreatedByInputObjectSchema } from './NoteUncheckedCreateWithoutCreatedByInput.schema'

export const NoteCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.NoteCreateOrConnectWithoutCreatedByInput, Prisma.NoteCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const NoteCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
