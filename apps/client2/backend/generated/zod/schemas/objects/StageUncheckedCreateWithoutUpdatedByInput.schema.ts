import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.StageUncheckedCreateWithoutUpdatedByInput, Prisma.StageUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
export const StageUncheckedCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
