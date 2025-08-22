import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const FileUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateInput, Prisma.FileUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  reportId: z.string().nullish()
}).strict();
export const FileUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  reportId: z.string().nullish()
}).strict();
