import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutOrganizationInput.schema'

export const OrganizationUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateWithoutUsersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
