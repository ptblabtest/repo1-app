import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema } from './StageTypeUpdateOneRequiredWithoutStagesNestedInput.schema';
import { UserUpdateOneWithoutCreatorStageNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorStageNestedInput.schema';
import { ReportUpdateOneWithoutStagesNestedInputObjectSchema } from './ReportUpdateOneWithoutStagesNestedInput.schema'

export const StageUpdateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.StageUpdateWithoutUpdatedByInput, Prisma.StageUpdateWithoutUpdatedByInput> = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  type: z.lazy(() => StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorStageNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutStagesNestedInputObjectSchema).optional()
}).strict();
export const StageUpdateWithoutUpdatedByInputObjectZodSchema = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  type: z.lazy(() => StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorStageNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutStagesNestedInputObjectSchema).optional()
}).strict();
