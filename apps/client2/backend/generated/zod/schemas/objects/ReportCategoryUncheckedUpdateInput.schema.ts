import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ReportCategoryUncheckedUpdateManyWithoutParentNestedInputObjectSchema } from './ReportCategoryUncheckedUpdateManyWithoutParentNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCategoryNestedInput.schema'

export const ReportCategoryUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ReportCategoryUncheckedUpdateInput, Prisma.ReportCategoryUncheckedUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  children: z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ReportCategoryUncheckedUpdateInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  children: z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
