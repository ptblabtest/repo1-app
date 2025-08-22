import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateManyReportInputObjectSchema } from './NoteCreateManyReportInput.schema'

export const NoteCreateManyReportInputEnvelopeObjectSchema: z.ZodType<Prisma.NoteCreateManyReportInputEnvelope, Prisma.NoteCreateManyReportInputEnvelope> = z.object({
  data: z.union([z.lazy(() => NoteCreateManyReportInputObjectSchema), z.lazy(() => NoteCreateManyReportInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const NoteCreateManyReportInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => NoteCreateManyReportInputObjectSchema), z.lazy(() => NoteCreateManyReportInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
