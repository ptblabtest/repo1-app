import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const PermissionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PermissionCountOutputTypeSelect, Prisma.PermissionCountOutputTypeSelect> = z.object({
  dept: z.boolean().optional(),
  users: z.boolean().optional()
}).strict();
export const PermissionCountOutputTypeSelectObjectZodSchema = z.object({
  dept: z.boolean().optional(),
  users: z.boolean().optional()
}).strict();
