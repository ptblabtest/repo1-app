import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteUncheckedCreateInputObjectSchema: z.ZodType<Prisma.NoteUncheckedCreateInput, Prisma.NoteUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
export const NoteUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
