import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema } from './StageTypeUpdateOneRequiredWithoutStagesNestedInput.schema';
import { UserUpdateOneWithoutCreatorStageNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorStageNestedInput.schema';
import { UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterStageNestedInput.schema';
import { ReportUpdateOneWithoutStagesNestedInputObjectSchema } from './ReportUpdateOneWithoutStagesNestedInput.schema'

export const StageUpdateInputObjectSchema: z.ZodType<Prisma.StageUpdateInput, Prisma.StageUpdateInput> = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  type: z.lazy(() => StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorStageNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutStagesNestedInputObjectSchema).optional()
}).strict();
export const StageUpdateInputObjectZodSchema = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  type: z.lazy(() => StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorStageNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutStagesNestedInputObjectSchema).optional()
}).strict();
