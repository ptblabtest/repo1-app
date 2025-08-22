import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DepartmentCountOutputTypeSelect, Prisma.DepartmentCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
  permissions: z.boolean().optional()
}).strict();
export const DepartmentCountOutputTypeSelectObjectZodSchema = z.object({
  users: z.boolean().optional(),
  permissions: z.boolean().optional()
}).strict();
