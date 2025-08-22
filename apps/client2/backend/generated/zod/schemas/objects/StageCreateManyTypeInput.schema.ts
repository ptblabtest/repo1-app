import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageCreateManyTypeInputObjectSchema: z.ZodType<Prisma.StageCreateManyTypeInput, Prisma.StageCreateManyTypeInput> = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
export const StageCreateManyTypeInputObjectZodSchema = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  reportId: z.string().nullish()
}).strict();
