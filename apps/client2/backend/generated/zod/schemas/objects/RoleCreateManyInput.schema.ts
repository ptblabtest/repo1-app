import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleCreateManyInputObjectSchema: z.ZodType<Prisma.RoleCreateManyInput, Prisma.RoleCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int()
}).strict();
export const RoleCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int()
}).strict();
