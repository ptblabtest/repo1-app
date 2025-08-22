import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.RoleCreateWithoutUsersInput, Prisma.RoleCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int()
}).strict();
export const RoleCreateWithoutUsersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int()
}).strict();
