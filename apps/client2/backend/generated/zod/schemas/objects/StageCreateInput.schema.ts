import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeCreateNestedOneWithoutStagesInputObjectSchema } from './StageTypeCreateNestedOneWithoutStagesInput.schema';
import { UserCreateNestedOneWithoutCreatorStageInputObjectSchema } from './UserCreateNestedOneWithoutCreatorStageInput.schema';
import { UserCreateNestedOneWithoutUpdaterStageInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterStageInput.schema';
import { ReportCreateNestedOneWithoutStagesInputObjectSchema } from './ReportCreateNestedOneWithoutStagesInput.schema'

export const StageCreateInputObjectSchema: z.ZodType<Prisma.StageCreateInput, Prisma.StageCreateInput> = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  type: z.lazy(() => StageTypeCreateNestedOneWithoutStagesInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorStageInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterStageInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutStagesInputObjectSchema).optional()
}).strict();
export const StageCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  type: z.lazy(() => StageTypeCreateNestedOneWithoutStagesInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorStageInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterStageInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutStagesInputObjectSchema).optional()
}).strict();
