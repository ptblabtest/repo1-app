import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeArgsObjectSchema } from './StageTypeArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ReportArgsObjectSchema } from './ReportArgs.schema'

export const StageSelectObjectSchema: z.ZodType<Prisma.StageSelect, Prisma.StageSelect> = z.object({
  id: z.boolean().optional(),
  stageTypeId: z.boolean().optional(),
  comment: z.boolean().optional(),
  createdById: z.boolean().optional(),
  updatedById: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.union([z.boolean(), z.lazy(() => StageTypeArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional(),
  reportId: z.boolean().optional()
}).strict();
export const StageSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  stageTypeId: z.boolean().optional(),
  comment: z.boolean().optional(),
  createdById: z.boolean().optional(),
  updatedById: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.union([z.boolean(), z.lazy(() => StageTypeArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional(),
  reportId: z.boolean().optional()
}).strict();
