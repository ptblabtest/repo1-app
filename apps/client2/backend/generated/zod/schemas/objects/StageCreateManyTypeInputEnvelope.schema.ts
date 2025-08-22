import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateManyTypeInputObjectSchema } from './StageCreateManyTypeInput.schema'

export const StageCreateManyTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.StageCreateManyTypeInputEnvelope, Prisma.StageCreateManyTypeInputEnvelope> = z.object({
  data: z.union([z.lazy(() => StageCreateManyTypeInputObjectSchema), z.lazy(() => StageCreateManyTypeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StageCreateManyTypeInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => StageCreateManyTypeInputObjectSchema), z.lazy(() => StageCreateManyTypeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
