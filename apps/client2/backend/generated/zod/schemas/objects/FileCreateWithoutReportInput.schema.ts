import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const FileCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.FileCreateWithoutReportInput, Prisma.FileCreateWithoutReportInput> = z.object({
  id: z.string().optional(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const FileCreateWithoutReportInputObjectZodSchema = z.object({
  id: z.string().optional(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
