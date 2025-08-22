import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateManyCreatedByInputObjectSchema } from './PermissionCreateManyCreatedByInput.schema'

export const PermissionCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.PermissionCreateManyCreatedByInputEnvelope, Prisma.PermissionCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => PermissionCreateManyCreatedByInputObjectSchema), z.lazy(() => PermissionCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PermissionCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => PermissionCreateManyCreatedByInputObjectSchema), z.lazy(() => PermissionCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
