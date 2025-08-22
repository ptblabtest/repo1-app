import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedManyWithoutOrganizationInputObjectSchema } from './UserCreateNestedManyWithoutOrganizationInput.schema'

export const OrganizationCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutReportInput, Prisma.OrganizationCreateWithoutReportInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  users: z.lazy(() => UserCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutReportInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  users: z.lazy(() => UserCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
