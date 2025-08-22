import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.StageCreateManyUpdatedByInput, Prisma.StageCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
export const StageCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
