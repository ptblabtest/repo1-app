import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithoutReportInputObjectSchema } from './NoteUpdateWithoutReportInput.schema';
import { NoteUncheckedUpdateWithoutReportInputObjectSchema } from './NoteUncheckedUpdateWithoutReportInput.schema'

export const NoteUpdateWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.NoteUpdateWithWhereUniqueWithoutReportInput, Prisma.NoteUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const NoteUpdateWithWhereUniqueWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NoteUpdateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
