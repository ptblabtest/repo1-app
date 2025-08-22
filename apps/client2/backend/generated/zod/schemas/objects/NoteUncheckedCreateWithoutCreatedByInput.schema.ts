import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.NoteUncheckedCreateWithoutCreatedByInput, Prisma.NoteUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
export const NoteUncheckedCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  description: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedById: z.string().nullish(),
  reportId: z.string().nullish()
}).strict();
