import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateManyCreatedByInputObjectSchema } from './StageCreateManyCreatedByInput.schema'

export const StageCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.StageCreateManyCreatedByInputEnvelope, Prisma.StageCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => StageCreateManyCreatedByInputObjectSchema), z.lazy(() => StageCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StageCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => StageCreateManyCreatedByInputObjectSchema), z.lazy(() => StageCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
