import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageUncheckedCreateWithoutTypeInputObjectSchema: z.ZodType<Prisma.StageUncheckedCreateWithoutTypeInput, Prisma.StageUncheckedCreateWithoutTypeInput> = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
export const StageUncheckedCreateWithoutTypeInputObjectZodSchema = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
