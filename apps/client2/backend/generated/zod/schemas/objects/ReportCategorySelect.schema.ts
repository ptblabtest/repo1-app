import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryArgsObjectSchema } from './ReportCategoryArgs.schema';
import { ReportCategoryFindManySchema } from '../findManyReportCategory.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { ReportCategoryCountOutputTypeArgsObjectSchema } from './ReportCategoryCountOutputTypeArgs.schema'

export const ReportCategorySelectObjectSchema: z.ZodType<Prisma.ReportCategorySelect, Prisma.ReportCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  parent: z.union([z.boolean(), z.lazy(() => ReportCategoryArgsObjectSchema)]).optional(),
  parentId: z.boolean().optional(),
  children: z.union([z.boolean(), z.lazy(() => ReportCategoryFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportCategorySelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  parent: z.union([z.boolean(), z.lazy(() => ReportCategoryArgsObjectSchema)]).optional(),
  parentId: z.boolean().optional(),
  children: z.union([z.boolean(), z.lazy(() => ReportCategoryFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
