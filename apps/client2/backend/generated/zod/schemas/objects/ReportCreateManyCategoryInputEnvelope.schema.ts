import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateManyCategoryInputObjectSchema } from './ReportCreateManyCategoryInput.schema'

export const ReportCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyCategoryInputEnvelope, Prisma.ReportCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ReportCreateManyCategoryInputObjectSchema), z.lazy(() => ReportCreateManyCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyCategoryInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ReportCreateManyCategoryInputObjectSchema), z.lazy(() => ReportCreateManyCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
