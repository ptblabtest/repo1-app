import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithoutUpdatedByInputObjectSchema } from './NoteUpdateWithoutUpdatedByInput.schema';
import { NoteUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './NoteUncheckedUpdateWithoutUpdatedByInput.schema';
import { NoteCreateWithoutUpdatedByInputObjectSchema } from './NoteCreateWithoutUpdatedByInput.schema';
import { NoteUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NoteUncheckedCreateWithoutUpdatedByInput.schema'

export const NoteUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.NoteUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NoteUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const NoteUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NoteUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
