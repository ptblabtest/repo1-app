import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema } from './ReportCategoryCreateNestedOneWithoutChildrenInput.schema';
import { ReportCategoryCreateNestedManyWithoutParentInputObjectSchema } from './ReportCategoryCreateNestedManyWithoutParentInput.schema';
import { UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateNestedOneWithoutCreatorReportCategoryInput.schema';
import { ReportCreateNestedManyWithoutCategoryInputObjectSchema } from './ReportCreateNestedManyWithoutCategoryInput.schema'

export const ReportCategoryCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateWithoutUpdatedByInput, Prisma.ReportCategoryCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  parent: z.lazy(() => ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryCreateNestedManyWithoutParentInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ReportCategoryCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  parent: z.lazy(() => ReportCategoryCreateNestedOneWithoutChildrenInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryCreateNestedManyWithoutParentInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
