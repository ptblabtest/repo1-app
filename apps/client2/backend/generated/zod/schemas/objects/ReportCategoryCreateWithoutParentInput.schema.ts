import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateNestedManyWithoutParentInputObjectSchema } from './ReportCategoryCreateNestedManyWithoutParentInput.schema';
import { UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateNestedOneWithoutCreatorReportCategoryInput.schema';
import { UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterReportCategoryInput.schema';
import { ReportCreateNestedManyWithoutCategoryInputObjectSchema } from './ReportCreateNestedManyWithoutCategoryInput.schema'

export const ReportCategoryCreateWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateWithoutParentInput, Prisma.ReportCategoryCreateWithoutParentInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  children: z.lazy(() => ReportCategoryCreateNestedManyWithoutParentInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ReportCategoryCreateWithoutParentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  children: z.lazy(() => ReportCategoryCreateNestedManyWithoutParentInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
