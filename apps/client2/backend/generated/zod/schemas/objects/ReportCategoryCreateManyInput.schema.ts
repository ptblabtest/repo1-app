import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCategoryCreateManyInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateManyInput, Prisma.ReportCategoryCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const ReportCategoryCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  parentId: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
