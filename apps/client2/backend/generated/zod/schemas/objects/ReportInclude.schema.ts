import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryArgsObjectSchema } from './ReportCategoryArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { NoteFindManySchema } from '../findManyNote.schema';
import { StageFindManySchema } from '../findManyStage.schema';
import { FileFindManySchema } from '../findManyFile.schema';
import { ReportCountOutputTypeArgsObjectSchema } from './ReportCountOutputTypeArgs.schema'

export const ReportIncludeObjectSchema: z.ZodType<Prisma.ReportInclude, Prisma.ReportInclude> = z.object({
  category: z.union([z.boolean(), z.lazy(() => ReportCategoryArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  notes: z.union([z.boolean(), z.lazy(() => NoteFindManySchema)]).optional(),
  stages: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportIncludeObjectZodSchema = z.object({
  category: z.union([z.boolean(), z.lazy(() => ReportCategoryArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  notes: z.union([z.boolean(), z.lazy(() => NoteFindManySchema)]).optional(),
  stages: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
