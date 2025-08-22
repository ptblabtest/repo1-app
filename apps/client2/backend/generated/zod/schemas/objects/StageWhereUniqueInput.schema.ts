import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const StageWhereUniqueInputObjectSchema: z.ZodType<Prisma.StageWhereUniqueInput, Prisma.StageWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const StageWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
