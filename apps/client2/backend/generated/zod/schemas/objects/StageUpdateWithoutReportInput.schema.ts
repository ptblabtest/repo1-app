import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema } from './StageTypeUpdateOneRequiredWithoutStagesNestedInput.schema';
import { UserUpdateOneWithoutCreatorStageNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorStageNestedInput.schema';
import { UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterStageNestedInput.schema'

export const StageUpdateWithoutReportInputObjectSchema: z.ZodType<Prisma.StageUpdateWithoutReportInput, Prisma.StageUpdateWithoutReportInput> = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  type: z.lazy(() => StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorStageNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema).optional()
}).strict();
export const StageUpdateWithoutReportInputObjectZodSchema = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  type: z.lazy(() => StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorStageNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema).optional()
}).strict();
