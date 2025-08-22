import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageUncheckedCreateNestedManyWithoutReportInputObjectSchema } from './StageUncheckedCreateNestedManyWithoutReportInput.schema';
import { FileUncheckedCreateNestedManyWithoutReportInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutReportInput.schema'

export const ReportUncheckedCreateWithoutNotesInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateWithoutNotesInput, Prisma.ReportUncheckedCreateWithoutNotesInput> = z.object({
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
  stages: z.lazy(() => StageUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
export const ReportUncheckedCreateWithoutNotesInputObjectZodSchema = z.object({
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
  stages: z.lazy(() => StageUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
