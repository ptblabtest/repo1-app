import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorStageNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorStageNestedInput.schema';
import { UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterStageNestedInput.schema';
import { ReportUpdateOneWithoutStagesNestedInputObjectSchema } from './ReportUpdateOneWithoutStagesNestedInput.schema'

export const StageUpdateWithoutTypeInputObjectSchema: z.ZodType<Prisma.StageUpdateWithoutTypeInput, Prisma.StageUpdateWithoutTypeInput> = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorStageNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutStagesNestedInputObjectSchema).optional()
}).strict();
export const StageUpdateWithoutTypeInputObjectZodSchema = z.object({
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorStageNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterStageNestedInputObjectSchema).optional(),
  report: z.lazy(() => ReportUpdateOneWithoutStagesNestedInputObjectSchema).optional()
}).strict();
