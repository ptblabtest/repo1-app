import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeCreateNestedOneWithoutStagesInputObjectSchema } from './StageTypeCreateNestedOneWithoutStagesInput.schema';
import { UserCreateNestedOneWithoutCreatorStageInputObjectSchema } from './UserCreateNestedOneWithoutCreatorStageInput.schema';
import { UserCreateNestedOneWithoutUpdaterStageInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterStageInput.schema'

export const StageCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.StageCreateWithoutReportInput, Prisma.StageCreateWithoutReportInput> = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  type: z.lazy(() => StageTypeCreateNestedOneWithoutStagesInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorStageInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterStageInputObjectSchema).optional()
}).strict();
export const StageCreateWithoutReportInputObjectZodSchema = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  type: z.lazy(() => StageTypeCreateNestedOneWithoutStagesInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorStageInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterStageInputObjectSchema).optional()
}).strict();
