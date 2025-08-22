import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateManyUpdatedByInputObjectSchema } from './PermissionCreateManyUpdatedByInput.schema'

export const PermissionCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.PermissionCreateManyUpdatedByInputEnvelope, Prisma.PermissionCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => PermissionCreateManyUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PermissionCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => PermissionCreateManyUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
