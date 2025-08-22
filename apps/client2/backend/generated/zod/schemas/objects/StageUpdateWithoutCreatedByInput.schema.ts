import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema } from './StageTypeUpdateOneRequiredWithoutStagesNestedInput.schema';
import { UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterStageNestedInput.schema';
import { ReportUpdateOneWithoutStagesNestedInputObjectSchema } from './ReportUpdateOneWithoutStagesNestedInput.schema'

export const StageUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StageUpdateWithoutCreatedByInput, Prisma.StageUpdateWithoutCreatedByInput> = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  type: z.lazy(() => StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutStagesNestedInputObjectSchema).optional()
}).strict();
export const StageUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  type: z.lazy(() => StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutStagesNestedInputObjectSchema).optional()
}).strict();
