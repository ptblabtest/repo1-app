import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateNestedOneWithoutFilesInputObjectSchema } from './ReportCreateNestedOneWithoutFilesInput.schema'

export const FileCreateInputObjectSchema: z.ZodType<Prisma.FileCreateInput, Prisma.FileCreateInput> = z.object({
  id: z.string().optional(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutFilesInputObjectSchema).optional()
}).strict();
export const FileCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutFilesInputObjectSchema).optional()
}).strict();
