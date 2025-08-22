import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ReportArgsObjectSchema } from './ReportArgs.schema'

export const NoteIncludeObjectSchema: z.ZodType<Prisma.NoteInclude, Prisma.NoteInclude> = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional()
}).strict();
export const NoteIncludeObjectZodSchema = z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional()
}).strict();
