import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorStageInputObjectSchema } from './UserCreateNestedOneWithoutCreatorStageInput.schema';
import { UserCreateNestedOneWithoutUpdaterStageInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterStageInput.schema';
import { ReportCreateNestedOneWithoutStagesInputObjectSchema } from './ReportCreateNestedOneWithoutStagesInput.schema'

export const StageCreateWithoutTypeInputObjectSchema: z.ZodType<Prisma.StageCreateWithoutTypeInput, Prisma.StageCreateWithoutTypeInput> = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorStageInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterStageInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutStagesInputObjectSchema).optional()
}).strict();
export const StageCreateWithoutTypeInputObjectZodSchema = z.object({
  id: z.string().optional(),
  comment: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorStageInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterStageInputObjectSchema).optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutStagesInputObjectSchema).optional()
}).strict();
