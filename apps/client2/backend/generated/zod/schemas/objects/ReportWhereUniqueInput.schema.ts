import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ReportWhereUniqueInputObjectSchema: z.ZodType<Prisma.ReportWhereUniqueInput, Prisma.ReportWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const ReportWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
