import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateManyUpdatedByInputObjectSchema } from './NoteCreateManyUpdatedByInput.schema'

export const NoteCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.NoteCreateManyUpdatedByInputEnvelope, Prisma.NoteCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => NoteCreateManyUpdatedByInputObjectSchema), z.lazy(() => NoteCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const NoteCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => NoteCreateManyUpdatedByInputObjectSchema), z.lazy(() => NoteCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
