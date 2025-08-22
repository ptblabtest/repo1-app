import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCreateManyUpdatedByInput, Prisma.ReportCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  organizationId: z.string().nullish()
}).strict();
export const ReportCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  organizationId: z.string().nullish()
}).strict();
