import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateManyUserInputObjectSchema } from './UserPermissionCreateManyUserInput.schema'

export const UserPermissionCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.UserPermissionCreateManyUserInputEnvelope, Prisma.UserPermissionCreateManyUserInputEnvelope> = z.object({
  data: z.union([z.lazy(() => UserPermissionCreateManyUserInputObjectSchema), z.lazy(() => UserPermissionCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserPermissionCreateManyUserInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => UserPermissionCreateManyUserInputObjectSchema), z.lazy(() => UserPermissionCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
