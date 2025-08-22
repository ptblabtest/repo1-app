import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileCreateManyReportInputObjectSchema } from './FileCreateManyReportInput.schema'

export const FileCreateManyReportInputEnvelopeObjectSchema: z.ZodType<Prisma.FileCreateManyReportInputEnvelope, Prisma.FileCreateManyReportInputEnvelope> = z.object({
  data: z.union([z.lazy(() => FileCreateManyReportInputObjectSchema), z.lazy(() => FileCreateManyReportInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileCreateManyReportInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => FileCreateManyReportInputObjectSchema), z.lazy(() => FileCreateManyReportInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
