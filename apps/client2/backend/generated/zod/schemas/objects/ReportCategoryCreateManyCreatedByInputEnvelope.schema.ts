import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateManyCreatedByInputObjectSchema } from './ReportCategoryCreateManyCreatedByInput.schema'

export const ReportCategoryCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCategoryCreateManyCreatedByInputEnvelope, Prisma.ReportCategoryCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ReportCategoryCreateManyCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCategoryCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ReportCategoryCreateManyCreatedByInputObjectSchema), z.lazy(() => ReportCategoryCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
