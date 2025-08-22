import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteCreateWithoutReportInputObjectSchema } from './NoteCreateWithoutReportInput.schema';
import { NoteUncheckedCreateWithoutReportInputObjectSchema } from './NoteUncheckedCreateWithoutReportInput.schema'

export const NoteCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.NoteCreateOrConnectWithoutReportInput, Prisma.NoteCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NoteCreateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const NoteCreateOrConnectWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NoteCreateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
