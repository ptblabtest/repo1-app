import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StageTypeCountOutputTypeSelect, Prisma.StageTypeCountOutputTypeSelect> = z.object({
  stages: z.boolean().optional()
}).strict();
export const StageTypeCountOutputTypeSelectObjectZodSchema = z.object({
  stages: z.boolean().optional()
}).strict();
