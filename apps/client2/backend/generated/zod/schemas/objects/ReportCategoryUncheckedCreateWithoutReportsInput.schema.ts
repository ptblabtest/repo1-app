import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './ReportCategoryUncheckedCreateNestedManyWithoutParentInput.schema'

export const ReportCategoryUncheckedCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedCreateWithoutReportsInput, Prisma.ReportCategoryUncheckedCreateWithoutReportsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  children: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional()
}).strict();
export const ReportCategoryUncheckedCreateWithoutReportsInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  children: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional()
}).strict();
