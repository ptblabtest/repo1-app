import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileCreateManyUpdatedByInputObjectSchema } from './ProfileCreateManyUpdatedByInput.schema'

export const ProfileCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ProfileCreateManyUpdatedByInputEnvelope, Prisma.ProfileCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ProfileCreateManyUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProfileCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ProfileCreateManyUpdatedByInputObjectSchema), z.lazy(() => ProfileCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
