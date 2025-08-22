import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateManyDepartmentInputObjectSchema } from './UserCreateManyDepartmentInput.schema'

export const UserCreateManyDepartmentInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyDepartmentInputEnvelope, Prisma.UserCreateManyDepartmentInputEnvelope> = z.object({
  data: z.union([z.lazy(() => UserCreateManyDepartmentInputObjectSchema), z.lazy(() => UserCreateManyDepartmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyDepartmentInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => UserCreateManyDepartmentInputObjectSchema), z.lazy(() => UserCreateManyDepartmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
