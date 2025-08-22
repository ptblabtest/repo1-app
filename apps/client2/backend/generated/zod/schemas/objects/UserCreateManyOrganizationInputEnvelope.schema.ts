import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateManyOrganizationInputObjectSchema } from './UserCreateManyOrganizationInput.schema'

export const UserCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyOrganizationInputEnvelope, Prisma.UserCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([z.lazy(() => UserCreateManyOrganizationInputObjectSchema), z.lazy(() => UserCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyOrganizationInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => UserCreateManyOrganizationInputObjectSchema), z.lazy(() => UserCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
