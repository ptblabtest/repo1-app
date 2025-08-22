import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryCreateManyParentInputObjectSchema } from './ReportCategoryCreateManyParentInput.schema'

export const ReportCategoryCreateManyParentInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCategoryCreateManyParentInputEnvelope, Prisma.ReportCategoryCreateManyParentInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ReportCategoryCreateManyParentInputObjectSchema), z.lazy(() => ReportCategoryCreateManyParentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCategoryCreateManyParentInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ReportCategoryCreateManyParentInputObjectSchema), z.lazy(() => ReportCategoryCreateManyParentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
