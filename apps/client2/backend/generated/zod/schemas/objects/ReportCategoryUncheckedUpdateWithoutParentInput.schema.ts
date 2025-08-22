import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ReportCategoryUncheckedUpdateManyWithoutParentNestedInputObjectSchema } from './ReportCategoryUncheckedUpdateManyWithoutParentNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCategoryNestedInput.schema'

export const ReportCategoryUncheckedUpdateWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedUpdateWithoutParentInput, Prisma.ReportCategoryUncheckedUpdateWithoutParentInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  children: z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ReportCategoryUncheckedUpdateWithoutParentInputObjectZodSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  children: z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
