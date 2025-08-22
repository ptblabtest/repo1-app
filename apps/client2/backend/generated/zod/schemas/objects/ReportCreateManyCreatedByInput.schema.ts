import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCreateManyCreatedByInput, Prisma.ReportCreateManyCreatedByInput> = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish(),
  organizationId: z.string().nullish()
}).strict();
export const ReportCreateManyCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish(),
  organizationId: z.string().nullish()
}).strict();
