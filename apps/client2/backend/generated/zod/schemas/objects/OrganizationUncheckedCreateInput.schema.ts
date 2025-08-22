import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { ReportUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutOrganizationInput.schema'

export const OrganizationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateInput, Prisma.OrganizationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
