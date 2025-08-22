import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateManyCreatedByInputObjectSchema } from './NoteCreateManyCreatedByInput.schema'

export const NoteCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.NoteCreateManyCreatedByInputEnvelope, Prisma.NoteCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => NoteCreateManyCreatedByInputObjectSchema), z.lazy(() => NoteCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const NoteCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => NoteCreateManyCreatedByInputObjectSchema), z.lazy(() => NoteCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
