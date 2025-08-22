import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const OrganizationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrganizationCountOutputTypeSelect, Prisma.OrganizationCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
  Report: z.boolean().optional()
}).strict();
export const OrganizationCountOutputTypeSelectObjectZodSchema = z.object({
  users: z.boolean().optional(),
  Report: z.boolean().optional()
}).strict();
