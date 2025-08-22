import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateManyUpdatedByInputObjectSchema } from './ReportCreateManyUpdatedByInput.schema'

export const ReportCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyUpdatedByInputEnvelope, Prisma.ReportCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ReportCreateManyUpdatedByInputObjectSchema), z.lazy(() => ReportCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ReportCreateManyUpdatedByInputObjectSchema), z.lazy(() => ReportCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
