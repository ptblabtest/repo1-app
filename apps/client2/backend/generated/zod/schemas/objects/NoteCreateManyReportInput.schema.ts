import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteCreateManyReportInputObjectSchema: z.ZodType<Prisma.NoteCreateManyReportInput, Prisma.NoteCreateManyReportInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const NoteCreateManyReportInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
