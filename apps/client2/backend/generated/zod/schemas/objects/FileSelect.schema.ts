import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportArgsObjectSchema } from './ReportArgs.schema'

export const FileSelectObjectSchema: z.ZodType<Prisma.FileSelect, Prisma.FileSelect> = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  path: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  size: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional(),
  reportId: z.boolean().optional()
}).strict();
export const FileSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  path: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  size: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional(),
  reportId: z.boolean().optional()
}).strict();
