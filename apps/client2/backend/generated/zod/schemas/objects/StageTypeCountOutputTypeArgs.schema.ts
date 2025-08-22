import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeCountOutputTypeSelectObjectSchema } from './StageTypeCountOutputTypeSelect.schema'

export const StageTypeCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => StageTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StageTypeCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => StageTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
