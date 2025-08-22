import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportUpdateWithoutNotesInputObjectSchema } from './ReportUpdateWithoutNotesInput.schema';
import { ReportUncheckedUpdateWithoutNotesInputObjectSchema } from './ReportUncheckedUpdateWithoutNotesInput.schema'

export const ReportUpdateToOneWithWhereWithoutNotesInputObjectSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutNotesInput, Prisma.ReportUpdateToOneWithWhereWithoutNotesInput> = z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportUpdateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutNotesInputObjectSchema)])
}).strict();
export const ReportUpdateToOneWithWhereWithoutNotesInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportUpdateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutNotesInputObjectSchema)])
}).strict();
