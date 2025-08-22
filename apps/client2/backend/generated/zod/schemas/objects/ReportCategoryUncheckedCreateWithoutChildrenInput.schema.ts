import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCategoryInput.schema'

export const ReportCategoryUncheckedCreateWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedCreateWithoutChildrenInput, Prisma.ReportCategoryUncheckedCreateWithoutChildrenInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ReportCategoryUncheckedCreateWithoutChildrenInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
