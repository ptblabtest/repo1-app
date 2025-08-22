import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReportUpdateManyWithoutOrganizationNestedInputObjectSchema } from './ReportUpdateManyWithoutOrganizationNestedInput.schema'

export const OrganizationUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithoutUsersInput, Prisma.OrganizationUpdateWithoutUsersInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateWithoutUsersInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
