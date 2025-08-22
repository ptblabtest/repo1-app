import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

export const ReportListRelationFilterObjectSchema: z.ZodType<Prisma.ReportListRelationFilter, Prisma.ReportListRelationFilter> = z.object({
  every: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const ReportListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
