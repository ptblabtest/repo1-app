import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteScalarWhereInputObjectSchema } from './NoteScalarWhereInput.schema';
import { NoteUpdateManyMutationInputObjectSchema } from './NoteUpdateManyMutationInput.schema';
import { NoteUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './NoteUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const NoteUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteUpdateManyWithWhereWithoutUpdatedByInput, Prisma.NoteUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => NoteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateManyMutationInputObjectSchema), z.lazy(() => NoteUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const NoteUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateManyMutationInputObjectSchema), z.lazy(() => NoteUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
