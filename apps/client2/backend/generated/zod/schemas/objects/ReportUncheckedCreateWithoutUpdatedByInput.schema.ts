import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteUncheckedCreateNestedManyWithoutReportInputObjectSchema } from './NoteUncheckedCreateNestedManyWithoutReportInput.schema';
import { StageUncheckedCreateNestedManyWithoutReportInputObjectSchema } from './StageUncheckedCreateNestedManyWithoutReportInput.schema';
import { FileUncheckedCreateNestedManyWithoutReportInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutReportInput.schema'

export const ReportUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateWithoutUpdatedByInput, Prisma.ReportUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  organizationId: z.string().nullish(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional(),
  stages: z.lazy(() => StageUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
export const ReportUncheckedCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  organizationId: z.string().nullish(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional(),
  stages: z.lazy(() => StageUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
