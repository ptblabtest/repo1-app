import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeCreateNestedOneWithoutStagesInputObjectSchema } from './StageTypeCreateNestedOneWithoutStagesInput.schema';
import { UserCreateNestedOneWithoutUpdaterStageInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterStageInput.schema';
import { ReportCreateNestedOneWithoutStagesInputObjectSchema } from './ReportCreateNestedOneWithoutStagesInput.schema'

export const StageCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StageCreateWithoutCreatedByInput, Prisma.StageCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  type: z.lazy(() => StageTypeCreateNestedOneWithoutStagesInputObjectSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterStageInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutStagesInputObjectSchema).optional()
}).strict();
export const StageCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  type: z.lazy(() => StageTypeCreateNestedOneWithoutStagesInputObjectSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterStageInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutStagesInputObjectSchema).optional()
}).strict();
