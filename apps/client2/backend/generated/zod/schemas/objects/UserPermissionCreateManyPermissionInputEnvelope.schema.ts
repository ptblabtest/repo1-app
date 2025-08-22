import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateManyPermissionInputObjectSchema } from './UserPermissionCreateManyPermissionInput.schema'

export const UserPermissionCreateManyPermissionInputEnvelopeObjectSchema: z.ZodType<Prisma.UserPermissionCreateManyPermissionInputEnvelope, Prisma.UserPermissionCreateManyPermissionInputEnvelope> = z.object({
  data: z.union([z.lazy(() => UserPermissionCreateManyPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateManyPermissionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserPermissionCreateManyPermissionInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => UserPermissionCreateManyPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateManyPermissionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
