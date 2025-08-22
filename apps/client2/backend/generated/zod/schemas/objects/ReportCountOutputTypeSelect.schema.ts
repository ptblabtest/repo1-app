import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ReportCountOutputTypeSelect, Prisma.ReportCountOutputTypeSelect> = z.object({
  notes: z.boolean().optional(),
  stages: z.boolean().optional(),
  files: z.boolean().optional()
}).strict();
export const ReportCountOutputTypeSelectObjectZodSchema = z.object({
  notes: z.boolean().optional(),
  stages: z.boolean().optional(),
  files: z.boolean().optional()
}).strict();
