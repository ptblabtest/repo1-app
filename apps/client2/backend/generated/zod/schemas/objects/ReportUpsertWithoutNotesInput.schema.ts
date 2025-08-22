import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportUpdateWithoutNotesInputObjectSchema } from './ReportUpdateWithoutNotesInput.schema';
import { ReportUncheckedUpdateWithoutNotesInputObjectSchema } from './ReportUncheckedUpdateWithoutNotesInput.schema';
import { ReportCreateWithoutNotesInputObjectSchema } from './ReportCreateWithoutNotesInput.schema';
import { ReportUncheckedCreateWithoutNotesInputObjectSchema } from './ReportUncheckedCreateWithoutNotesInput.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

export const ReportUpsertWithoutNotesInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithoutNotesInput, Prisma.ReportUpsertWithoutNotesInput> = z.object({
  update: z.union([z.lazy(() => ReportUpdateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutNotesInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutNotesInputObjectSchema)]),
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const ReportUpsertWithoutNotesInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => ReportUpdateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutNotesInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutNotesInputObjectSchema)]),
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
