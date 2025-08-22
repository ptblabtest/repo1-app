import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StageUncheckedCreateWithoutCreatedByInput, Prisma.StageUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
export const StageUncheckedCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
