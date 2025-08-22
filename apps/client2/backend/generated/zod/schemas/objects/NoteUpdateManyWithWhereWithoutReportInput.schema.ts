import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteScalarWhereInputObjectSchema } from './NoteScalarWhereInput.schema';
import { NoteUpdateManyMutationInputObjectSchema } from './NoteUpdateManyMutationInput.schema';
import { NoteUncheckedUpdateManyWithoutReportInputObjectSchema } from './NoteUncheckedUpdateManyWithoutReportInput.schema'

export const NoteUpdateManyWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.NoteUpdateManyWithWhereWithoutReportInput, Prisma.NoteUpdateManyWithWhereWithoutReportInput> = z.object({
  where: z.lazy(() => NoteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateManyMutationInputObjectSchema), z.lazy(() => NoteUncheckedUpdateManyWithoutReportInputObjectSchema)])
}).strict();
export const NoteUpdateManyWithWhereWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateManyMutationInputObjectSchema), z.lazy(() => NoteUncheckedUpdateManyWithoutReportInputObjectSchema)])
}).strict();
