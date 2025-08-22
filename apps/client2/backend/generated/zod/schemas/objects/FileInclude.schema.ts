import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportArgsObjectSchema } from './ReportArgs.schema'

export const FileIncludeObjectSchema: z.ZodType<Prisma.FileInclude, Prisma.FileInclude> = z.object({
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional()
}).strict();
export const FileIncludeObjectZodSchema = z.object({
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional()
}).strict();
