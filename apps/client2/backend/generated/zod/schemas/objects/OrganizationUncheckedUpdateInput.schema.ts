import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutOrganizationNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutOrganizationNestedInput.schema'

export const OrganizationUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateInput, Prisma.OrganizationUncheckedUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedUpdateInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
