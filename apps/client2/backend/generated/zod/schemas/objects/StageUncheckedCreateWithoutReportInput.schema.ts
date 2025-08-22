import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageUncheckedCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.StageUncheckedCreateWithoutReportInput, Prisma.StageUncheckedCreateWithoutReportInput> = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish()
}).strict();
export const StageUncheckedCreateWithoutReportInputObjectZodSchema = z.object({
  id: z.string().optional(),
  stageTypeId: z.string(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish()
}).strict();
