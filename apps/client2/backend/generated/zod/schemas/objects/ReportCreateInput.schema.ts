import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateNestedOneWithoutReportsInputObjectSchema } from './ReportCategoryCreateNestedOneWithoutReportsInput.schema';
import { UserCreateNestedOneWithoutCreatorReportInputObjectSchema } from './UserCreateNestedOneWithoutCreatorReportInput.schema';
import { UserCreateNestedOneWithoutUpdaterReportInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterReportInput.schema';
import { OrganizationCreateNestedOneWithoutReportInputObjectSchema } from './OrganizationCreateNestedOneWithoutReportInput.schema';
import { NoteCreateNestedManyWithoutReportInputObjectSchema } from './NoteCreateNestedManyWithoutReportInput.schema';
import { StageCreateNestedManyWithoutReportInputObjectSchema } from './StageCreateNestedManyWithoutReportInput.schema';
import { FileCreateNestedManyWithoutReportInputObjectSchema } from './FileCreateNestedManyWithoutReportInput.schema'

export const ReportCreateInputObjectSchema: z.ZodType<Prisma.ReportCreateInput, Prisma.ReportCreateInput> = z.object({
  id: z.string().optional(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  category: z.lazy(() => ReportCategoryCreateNestedOneWithoutReportsInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutReportInputObjectSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutReportInputObjectSchema).optional(),
  stages: z.lazy(() => StageCreateNestedManyWithoutReportInputObjectSchema).optional(),
  files: z.lazy(() => FileCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
export const ReportCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  category: z.lazy(() => ReportCategoryCreateNestedOneWithoutReportsInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutReportInputObjectSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutReportInputObjectSchema).optional(),
  stages: z.lazy(() => StageCreateNestedManyWithoutReportInputObjectSchema).optional(),
  files: z.lazy(() => FileCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
