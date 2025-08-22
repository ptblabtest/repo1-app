import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportCategoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.ReportCategoryWhereUniqueInput, Prisma.ReportCategoryWhereUniqueInput> = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string()
}).strict();
export const ReportCategoryWhereUniqueInputObjectZodSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string()
}).strict();
