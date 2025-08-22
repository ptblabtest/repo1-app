import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const SessionWhereUniqueInputObjectSchema: z.ZodType<Prisma.SessionWhereUniqueInput, Prisma.SessionWhereUniqueInput> = z.object({
  sid: z.string()
}).strict();
export const SessionWhereUniqueInputObjectZodSchema = z.object({
  sid: z.string()
}).strict();
