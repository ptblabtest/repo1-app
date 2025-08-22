import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteUncheckedCreateNestedManyWithoutReportInputObjectSchema } from './NoteUncheckedCreateNestedManyWithoutReportInput.schema';
import { StageUncheckedCreateNestedManyWithoutReportInputObjectSchema } from './StageUncheckedCreateNestedManyWithoutReportInput.schema'

export const ReportUncheckedCreateWithoutFilesInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateWithoutFilesInput, Prisma.ReportUncheckedCreateWithoutFilesInput> = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  organizationId: z.string().nullish(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional(),
  stages: z.lazy(() => StageUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
export const ReportUncheckedCreateWithoutFilesInputObjectZodSchema = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  organizationId: z.string().nullish(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional(),
  stages: z.lazy(() => StageUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
