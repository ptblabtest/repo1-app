import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const RoleUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUsersInput, Prisma.RoleUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int()
}).strict();
export const RoleUncheckedCreateWithoutUsersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int()
}).strict();
