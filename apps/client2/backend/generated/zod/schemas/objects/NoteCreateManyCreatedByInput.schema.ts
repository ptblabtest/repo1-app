import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.NoteCreateManyCreatedByInput, Prisma.NoteCreateManyCreatedByInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
export const NoteCreateManyCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
