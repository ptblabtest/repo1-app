import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryArgsObjectSchema } from './ReportCategoryArgs.schema';
import { ReportCategoryFindManySchema } from '../findManyReportCategory.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { ReportCategoryCountOutputTypeArgsObjectSchema } from './ReportCategoryCountOutputTypeArgs.schema'

export const ReportCategoryIncludeObjectSchema: z.ZodType<Prisma.ReportCategoryInclude, Prisma.ReportCategoryInclude> = z.object({
  parent: z.union([z.boolean(), z.lazy(() => ReportCategoryArgsObjectSchema)]).optional(),
  children: z.union([z.boolean(), z.lazy(() => ReportCategoryFindManySchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportCategoryIncludeObjectZodSchema = z.object({
  parent: z.union([z.boolean(), z.lazy(() => ReportCategoryArgsObjectSchema)]).optional(),
  children: z.union([z.boolean(), z.lazy(() => ReportCategoryFindManySchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
