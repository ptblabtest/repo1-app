import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteScalarWhereInputObjectSchema } from './NoteScalarWhereInput.schema';
import { NoteUpdateManyMutationInputObjectSchema } from './NoteUpdateManyMutationInput.schema';
import { NoteUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './NoteUncheckedUpdateManyWithoutCreatedByInput.schema'

export const NoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.NoteUpdateManyWithWhereWithoutCreatedByInput, Prisma.NoteUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => NoteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateManyMutationInputObjectSchema), z.lazy(() => NoteUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const NoteUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateManyMutationInputObjectSchema), z.lazy(() => NoteUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
