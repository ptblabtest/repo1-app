import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageFindManySchema } from '../findManyStage.schema';
import { StageTypeCountOutputTypeArgsObjectSchema } from './StageTypeCountOutputTypeArgs.schema'

export const StageTypeIncludeObjectSchema: z.ZodType<Prisma.StageTypeInclude, Prisma.StageTypeInclude> = z.object({
  stages: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StageTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StageTypeIncludeObjectZodSchema = z.object({
  stages: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StageTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
