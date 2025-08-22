import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NoteWhereUniqueInputObjectSchema: z.ZodType<Prisma.NoteWhereUniqueInput, Prisma.NoteWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const NoteWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
