import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteUncheckedCreateWithoutUpdatedByInput, Prisma.NoteUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
export const NoteUncheckedCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
