import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorReportInputObjectSchema } from './UserCreateNestedOneWithoutCreatorReportInput.schema';
import { UserCreateNestedOneWithoutUpdaterReportInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterReportInput.schema';
import { OrganizationCreateNestedOneWithoutReportInputObjectSchema } from './OrganizationCreateNestedOneWithoutReportInput.schema';
import { NoteCreateNestedManyWithoutReportInputObjectSchema } from './NoteCreateNestedManyWithoutReportInput.schema';
import { StageCreateNestedManyWithoutReportInputObjectSchema } from './StageCreateNestedManyWithoutReportInput.schema';
import { FileCreateNestedManyWithoutReportInputObjectSchema } from './FileCreateNestedManyWithoutReportInput.schema'

export const ReportCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ReportCreateWithoutCategoryInput, Prisma.ReportCreateWithoutCategoryInput> = z.object({
  id: z.string().optional(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutReportInputObjectSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutReportInputObjectSchema).optional(),
  stages: z.lazy(() => StageCreateNestedManyWithoutReportInputObjectSchema).optional(),
  files: z.lazy(() => FileCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
export const ReportCreateWithoutCategoryInputObjectZodSchema = z.object({
  id: z.string().optional(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutReportInputObjectSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutReportInputObjectSchema).optional(),
  stages: z.lazy(() => StageCreateNestedManyWithoutReportInputObjectSchema).optional(),
  files: z.lazy(() => FileCreateNestedManyWithoutReportInputObjectSchema).optional()
}).strict();
