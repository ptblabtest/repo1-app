import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RoleCountOutputTypeSelect, Prisma.RoleCountOutputTypeSelect> = z.object({
  users: z.boolean().optional()
}).strict();
export const RoleCountOutputTypeSelectObjectZodSchema = z.object({
  users: z.boolean().optional()
}).strict();
