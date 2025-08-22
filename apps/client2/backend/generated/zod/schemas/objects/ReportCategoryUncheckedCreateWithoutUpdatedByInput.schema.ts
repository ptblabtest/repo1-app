import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './ReportCategoryUncheckedCreateNestedManyWithoutParentInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCategoryInput.schema'

export const ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedCreateWithoutUpdatedByInput, Prisma.ReportCategoryUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  children: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ReportCategoryUncheckedCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  children: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
