import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ReportArgsObjectSchema } from './ReportArgs.schema'

export const NoteSelectObjectSchema: z.ZodType<Prisma.NoteSelect, Prisma.NoteSelect> = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional(),
  reportId: z.boolean().optional()
}).strict();
export const NoteSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional(),
  reportId: z.boolean().optional()
}).strict();
