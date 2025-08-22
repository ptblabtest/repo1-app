import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const FileWhereUniqueInputObjectSchema: z.ZodType<Prisma.FileWhereUniqueInput, Prisma.FileWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const FileWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
