import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserFindManySchema } from '../findManyUser.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { OrganizationCountOutputTypeArgsObjectSchema } from './OrganizationCountOutputTypeArgs.schema'

export const OrganizationIncludeObjectSchema: z.ZodType<Prisma.OrganizationInclude, Prisma.OrganizationInclude> = z.object({
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrganizationIncludeObjectZodSchema = z.object({
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
