import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageCreateManyInputObjectSchema: z.ZodType<Prisma.StageCreateManyInput, Prisma.StageCreateManyInput> = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
export const StageCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
