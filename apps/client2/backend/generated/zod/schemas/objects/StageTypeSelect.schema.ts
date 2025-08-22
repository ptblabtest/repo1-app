import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageFindManySchema } from '../findManyStage.schema';
import { StageTypeCountOutputTypeArgsObjectSchema } from './StageTypeCountOutputTypeArgs.schema'

export const StageTypeSelectObjectSchema: z.ZodType<Prisma.StageTypeSelect, Prisma.StageTypeSelect> = z.object({
  id: z.boolean().optional(),
  model: z.boolean().optional(),
  order: z.boolean().optional(),
  value: z.boolean().optional(),
  label: z.boolean().optional(),
  stages: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StageTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StageTypeSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  model: z.boolean().optional(),
  order: z.boolean().optional(),
  value: z.boolean().optional(),
  label: z.boolean().optional(),
  stages: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StageTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
