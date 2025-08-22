import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutOrganizationInput.schema'

export const OrganizationUncheckedCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutReportInput, Prisma.OrganizationUncheckedCreateWithoutReportInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateWithoutReportInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
