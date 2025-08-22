import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCategoryCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateManyUpdatedByInput, Prisma.ReportCategoryCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
export const ReportCategoryCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
