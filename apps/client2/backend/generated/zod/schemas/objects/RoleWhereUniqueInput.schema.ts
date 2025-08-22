import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleWhereUniqueInputObjectSchema: z.ZodType<Prisma.RoleWhereUniqueInput, Prisma.RoleWhereUniqueInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();
export const RoleWhereUniqueInputObjectZodSchema = z.object({
  id: z.string(),
  name: z.string()
}).strict();
