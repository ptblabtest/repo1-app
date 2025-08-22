import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCategoryCreateManyParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryCreateManyParentInput, Prisma.ReportCategoryCreateManyParentInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const ReportCategoryCreateManyParentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
