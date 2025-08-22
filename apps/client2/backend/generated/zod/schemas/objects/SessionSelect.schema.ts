import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const SessionSelectObjectSchema: z.ZodType<Prisma.SessionSelect, Prisma.SessionSelect> = z.object({
  sid: z.boolean().optional(),
  sess: z.boolean().optional(),
  expire: z.boolean().optional()
}).strict();
export const SessionSelectObjectZodSchema = z.object({
  sid: z.boolean().optional(),
  sess: z.boolean().optional(),
  expire: z.boolean().optional()
}).strict();
