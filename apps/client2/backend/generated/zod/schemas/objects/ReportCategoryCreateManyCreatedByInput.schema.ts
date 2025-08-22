import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCategoryCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateManyCreatedByInput, Prisma.ReportCategoryCreateManyCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
export const ReportCategoryCreateManyCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
