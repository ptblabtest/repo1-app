import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileCreateManyCreatedByInputObjectSchema } from './ProfileCreateManyCreatedByInput.schema'

export const ProfileCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ProfileCreateManyCreatedByInputEnvelope, Prisma.ProfileCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ProfileCreateManyCreatedByInputObjectSchema), z.lazy(() => ProfileCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProfileCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ProfileCreateManyCreatedByInputObjectSchema), z.lazy(() => ProfileCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
