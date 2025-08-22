import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateManyUpdatedByInputObjectSchema } from './UserPermissionCreateManyUpdatedByInput.schema'

export const UserPermissionCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.UserPermissionCreateManyUpdatedByInputEnvelope, Prisma.UserPermissionCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => UserPermissionCreateManyUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserPermissionCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => UserPermissionCreateManyUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
