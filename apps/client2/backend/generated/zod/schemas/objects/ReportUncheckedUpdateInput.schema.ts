import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NoteUncheckedUpdateManyWithoutReportNestedInputObjectSchema } from './NoteUncheckedUpdateManyWithoutReportNestedInput.schema';
import { StageUncheckedUpdateManyWithoutReportNestedInputObjectSchema } from './StageUncheckedUpdateManyWithoutReportNestedInput.schema';
import { FileUncheckedUpdateManyWithoutReportNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutReportNestedInput.schema'

export const ReportUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateInput, Prisma.ReportUncheckedUpdateInput> = z.object({
  categoryId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodYear: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodMonth: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodDate: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  organizationId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  stages: z.lazy(() => StageUncheckedUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  files: z.lazy(() => FileUncheckedUpdateManyWithoutReportNestedInputObjectSchema).optional()
}).strict();
export const ReportUncheckedUpdateInputObjectZodSchema = z.object({
  categoryId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodYear: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodMonth: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodDate: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  updatedById: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  organizationId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  stages: z.lazy(() => StageUncheckedUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  files: z.lazy(() => FileUncheckedUpdateManyWithoutReportNestedInputObjectSchema).optional()
}).strict();
