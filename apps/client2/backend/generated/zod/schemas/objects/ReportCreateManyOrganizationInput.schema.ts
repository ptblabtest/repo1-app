import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCreateManyOrganizationInputObjectSchema: z.ZodType<Prisma.ReportCreateManyOrganizationInput, Prisma.ReportCreateManyOrganizationInput> = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const ReportCreateManyOrganizationInputObjectZodSchema = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().nullish(),
  version: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
