import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema } from './ReportCategoryCreateNestedOneWithoutChildrenInput.schema';
import { ReportCategoryCreateNestedManyWithoutParentInputObjectSchema } from './ReportCategoryCreateNestedManyWithoutParentInput.schema';
import { UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterReportCategoryInput.schema';
import { ReportCreateNestedManyWithoutCategoryInputObjectSchema } from './ReportCreateNestedManyWithoutCategoryInput.schema'

export const ReportCategoryCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateWithoutCreatedByInput, Prisma.ReportCategoryCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  parent: z.lazy(() => ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryCreateNestedManyWithoutParentInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ReportCategoryCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  parent: z.lazy(() => ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryCreateNestedManyWithoutParentInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
