import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.StageTypeWhereUniqueInput, Prisma.StageTypeWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const StageTypeWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
