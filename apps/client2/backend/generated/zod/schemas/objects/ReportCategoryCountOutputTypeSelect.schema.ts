import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ReportCategoryCountOutputTypeSelect, Prisma.ReportCategoryCountOutputTypeSelect> = z.object({
  children: z.boolean().optional(),
  reports: z.boolean().optional()
}).strict();
export const ReportCategoryCountOutputTypeSelectObjectZodSchema = z.object({
  children: z.boolean().optional(),
  reports: z.boolean().optional()
}).strict();
