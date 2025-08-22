import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeCreateNestedOneWithoutStagesInputObjectSchema } from './StageTypeCreateNestedOneWithoutStagesInput.schema';
import { UserCreateNestedOneWithoutCreatorStageInputObjectSchema } from './UserCreateNestedOneWithoutCreatorStageInput.schema';
import { ReportCreateNestedOneWithoutStagesInputObjectSchema } from './ReportCreateNestedOneWithoutStagesInput.schema'

export const StageCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.StageCreateWithoutUpdatedByInput, Prisma.StageCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  type: z.lazy(() => StageTypeCreateNestedOneWithoutStagesInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorStageInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutStagesInputObjectSchema).optional()
}).strict();
export const StageCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  type: z.lazy(() => StageTypeCreateNestedOneWithoutStagesInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorStageInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutStagesInputObjectSchema).optional()
}).strict();
