import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithoutCreatedByInputObjectSchema } from './NoteUpdateWithoutCreatedByInput.schema';
import { NoteUncheckedUpdateWithoutCreatedByInputObjectSchema } from './NoteUncheckedUpdateWithoutCreatedByInput.schema'

export const NoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.NoteUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.NoteUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const NoteUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
