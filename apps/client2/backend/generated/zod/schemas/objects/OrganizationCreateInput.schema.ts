import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedManyWithoutOrganizationInputObjectSchema } from './UserCreateNestedManyWithoutOrganizationInput.schema';
import { ReportCreateNestedManyWithoutOrganizationInputObjectSchema } from './ReportCreateNestedManyWithoutOrganizationInput.schema'

export const OrganizationCreateInputObjectSchema: z.ZodType<Prisma.OrganizationCreateInput, Prisma.OrganizationCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  users: z.lazy(() => UserCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  users: z.lazy(() => UserCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
