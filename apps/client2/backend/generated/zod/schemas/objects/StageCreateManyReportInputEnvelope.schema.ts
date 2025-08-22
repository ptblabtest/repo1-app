import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateManyReportInputObjectSchema } from './StageCreateManyReportInput.schema'

export const StageCreateManyReportInputEnvelopeObjectSchema: z.ZodType<Prisma.StageCreateManyReportInputEnvelope, Prisma.StageCreateManyReportInputEnvelope> = z.object({
  data: z.union([z.lazy(() => StageCreateManyReportInputObjectSchema), z.lazy(() => StageCreateManyReportInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StageCreateManyReportInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => StageCreateManyReportInputObjectSchema), z.lazy(() => StageCreateManyReportInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
