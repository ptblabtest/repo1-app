import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithoutReportInputObjectSchema } from './NoteUpdateWithoutReportInput.schema';
import { NoteUncheckedUpdateWithoutReportInputObjectSchema } from './NoteUncheckedUpdateWithoutReportInput.schema';
import { NoteCreateWithoutReportInputObjectSchema } from './NoteCreateWithoutReportInput.schema';
import { NoteUncheckedCreateWithoutReportInputObjectSchema } from './NoteUncheckedCreateWithoutReportInput.schema'

export const NoteUpsertWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.NoteUpsertWithWhereUniqueWithoutReportInput, Prisma.NoteUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NoteUpdateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => NoteCreateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const NoteUpsertWithWhereUniqueWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NoteUpdateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => NoteCreateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
