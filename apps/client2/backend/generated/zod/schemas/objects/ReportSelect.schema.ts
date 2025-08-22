import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryArgsObjectSchema } from './ReportCategoryArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { NoteFindManySchema } from '../findManyNote.schema';
import { StageFindManySchema } from '../findManyStage.schema';
import { FileFindManySchema } from '../findManyFile.schema';
import { ReportCountOutputTypeArgsObjectSchema } from './ReportCountOutputTypeArgs.schema'

export const ReportSelectObjectSchema: z.ZodType<Prisma.ReportSelect, Prisma.ReportSelect> = z.object({
  id: z.boolean().optional(),
  category: z.union([z.boolean(), z.lazy(() => ReportCategoryArgsObjectSchema)]).optional(),
  categoryId: z.boolean().optional(),
  periodYear: z.boolean().optional(),
  periodMonth: z.boolean().optional(),
  periodDate: z.boolean().optional(),
  version: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  organizationId: z.boolean().optional(),
  notes: z.union([z.boolean(), z.lazy(() => NoteFindManySchema)]).optional(),
  stages: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  category: z.union([z.boolean(), z.lazy(() => ReportCategoryArgsObjectSchema)]).optional(),
  categoryId: z.boolean().optional(),
  periodYear: z.boolean().optional(),
  periodMonth: z.boolean().optional(),
  periodDate: z.boolean().optional(),
  version: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  updatedById: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  organizationId: z.boolean().optional(),
  notes: z.union([z.boolean(), z.lazy(() => NoteFindManySchema)]).optional(),
  stages: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
