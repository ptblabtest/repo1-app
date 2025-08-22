import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteCreateManyUpdatedByInput, Prisma.NoteCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
export const NoteCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
