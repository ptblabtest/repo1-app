import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithoutCreatedByInputObjectSchema } from './NoteUpdateWithoutCreatedByInput.schema';
import { NoteUncheckedUpdateWithoutCreatedByInputObjectSchema } from './NoteUncheckedUpdateWithoutCreatedByInput.schema';
import { NoteCreateWithoutCreatedByInputObjectSchema } from './NoteCreateWithoutCreatedByInput.schema';
import { NoteUncheckedCreateWithoutCreatedByInputObjectSchema } from './NoteUncheckedCreateWithoutCreatedByInput.schema'

export const NoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.NoteUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.NoteUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NoteUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const NoteUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NoteUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
