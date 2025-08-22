import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './ReportCategoryUncheckedCreateNestedManyWithoutParentInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCategoryInput.schema'

export const ReportCategoryUncheckedCreateWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedCreateWithoutParentInput, Prisma.ReportCategoryUncheckedCreateWithoutParentInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  children: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ReportCategoryUncheckedCreateWithoutParentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  children: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
