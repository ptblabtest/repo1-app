import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeArgsObjectSchema } from './StageTypeArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ReportArgsObjectSchema } from './ReportArgs.schema'

export const StageIncludeObjectSchema: z.ZodType<Prisma.StageInclude, Prisma.StageInclude> = z.object({
  type: z.union([z.boolean(), z.lazy(() => StageTypeArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional()
}).strict();
export const StageIncludeObjectZodSchema = z.object({
  type: z.union([z.boolean(), z.lazy(() => StageTypeArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional()
}).strict();
