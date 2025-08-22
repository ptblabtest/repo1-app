import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithoutUpdatedByInputObjectSchema } from './NoteUpdateWithoutUpdatedByInput.schema';
import { NoteUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './NoteUncheckedUpdateWithoutUpdatedByInput.schema'

export const NoteUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.NoteUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const NoteUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
