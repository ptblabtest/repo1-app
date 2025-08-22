import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const FileCreateManyInputObjectSchema: z.ZodType<Prisma.FileCreateManyInput, Prisma.FileCreateManyInput> = z.object({
  id: z.string().optional(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  reportId: z.string().nullish()
}).strict();
export const FileCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  reportId: z.string().nullish()
}).strict();
