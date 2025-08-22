import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.ReportCreateManyCategoryInput, Prisma.ReportCreateManyCategoryInput> = z.object({
  id: z.string().optional(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  organizationId: z.string().nullish()
}).strict();
export const ReportCreateManyCategoryInputObjectZodSchema = z.object({
  id: z.string().optional(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  organizationId: z.string().nullish()
}).strict();
