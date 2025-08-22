import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageCreateManyReportInputObjectSchema: z.ZodType<Prisma.StageCreateManyReportInput, Prisma.StageCreateManyReportInput> = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish()
}).strict();
export const StageCreateManyReportInputObjectZodSchema = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish()
}).strict();
