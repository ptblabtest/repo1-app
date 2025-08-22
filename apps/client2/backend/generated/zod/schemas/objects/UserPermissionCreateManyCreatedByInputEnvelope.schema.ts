import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateManyCreatedByInputObjectSchema } from './UserPermissionCreateManyCreatedByInput.schema'

export const UserPermissionCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.UserPermissionCreateManyCreatedByInputEnvelope, Prisma.UserPermissionCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => UserPermissionCreateManyCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserPermissionCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => UserPermissionCreateManyCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
