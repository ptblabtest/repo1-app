import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateNestedManyWithoutOrganizationInputObjectSchema } from './ReportCreateNestedManyWithoutOrganizationInput.schema'

export const OrganizationCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutUsersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
