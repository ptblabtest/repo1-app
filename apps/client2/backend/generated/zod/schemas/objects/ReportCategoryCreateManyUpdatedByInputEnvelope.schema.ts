import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateManyUpdatedByInputObjectSchema } from './ReportCategoryCreateManyUpdatedByInput.schema'

export const ReportCategoryCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCategoryCreateManyUpdatedByInputEnvelope, Prisma.ReportCategoryCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ReportCategoryCreateManyUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCategoryCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ReportCategoryCreateManyUpdatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
