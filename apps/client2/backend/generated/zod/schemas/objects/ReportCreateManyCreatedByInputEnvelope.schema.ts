import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateManyCreatedByInputObjectSchema } from './ReportCreateManyCreatedByInput.schema'

export const ReportCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyCreatedByInputEnvelope, Prisma.ReportCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ReportCreateManyCreatedByInputObjectSchema), z.lazy(() => ReportCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ReportCreateManyCreatedByInputObjectSchema), z.lazy(() => ReportCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
