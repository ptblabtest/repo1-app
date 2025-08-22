import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutOrganizationNestedInputObjectSchema } from './UserUpdateManyWithoutOrganizationNestedInput.schema';
import { ReportUpdateManyWithoutOrganizationNestedInputObjectSchema } from './ReportUpdateManyWithoutOrganizationNestedInput.schema'

export const OrganizationUpdateInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateInput, Prisma.OrganizationUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
