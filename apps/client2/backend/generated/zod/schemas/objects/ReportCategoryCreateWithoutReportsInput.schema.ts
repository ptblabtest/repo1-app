import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema } from './ReportCategoryCreateNestedOneWithoutChildrenInput.schema';
import { ReportCategoryCreateNestedManyWithoutParentInputObjectSchema } from './ReportCategoryCreateNestedManyWithoutParentInput.schema';
import { UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateNestedOneWithoutCreatorReportCategoryInput.schema';
import { UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterReportCategoryInput.schema'

export const ReportCategoryCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateWithoutReportsInput, Prisma.ReportCategoryCreateWithoutReportsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  parent: z.lazy(() => ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryCreateNestedManyWithoutParentInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema).optional()
}).strict();
export const ReportCategoryCreateWithoutReportsInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  parent: z.lazy(() => ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryCreateNestedManyWithoutParentInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema).optional()
}).strict();
