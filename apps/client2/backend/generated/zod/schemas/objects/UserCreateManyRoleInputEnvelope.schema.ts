import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateManyRoleInputObjectSchema } from './UserCreateManyRoleInput.schema'

export const UserCreateManyRoleInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyRoleInputEnvelope, Prisma.UserCreateManyRoleInputEnvelope> = z.object({
  data: z.union([z.lazy(() => UserCreateManyRoleInputObjectSchema), z.lazy(() => UserCreateManyRoleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyRoleInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => UserCreateManyRoleInputObjectSchema), z.lazy(() => UserCreateManyRoleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
