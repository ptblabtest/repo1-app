import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './ReportCategoryUncheckedCreateNestedManyWithoutParentInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCategoryInput.schema'

export const ReportCategoryUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedCreateWithoutCreatedByInput, Prisma.ReportCategoryUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish(),
  children: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ReportCategoryUncheckedCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish(),
  children: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
