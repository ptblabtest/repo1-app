import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateManyUpdatedByInputObjectSchema } from './StageCreateManyUpdatedByInput.schema'

export const StageCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.StageCreateManyUpdatedByInputEnvelope, Prisma.StageCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => StageCreateManyUpdatedByInputObjectSchema), z.lazy(() => StageCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StageCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => StageCreateManyUpdatedByInputObjectSchema), z.lazy(() => StageCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
