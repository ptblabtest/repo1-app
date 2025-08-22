import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteCreateManyInputObjectSchema: z.ZodType<Prisma.NoteCreateManyInput, Prisma.NoteCreateManyInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
export const NoteCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
