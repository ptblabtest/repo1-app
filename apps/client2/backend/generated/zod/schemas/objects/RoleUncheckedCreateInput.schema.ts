import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutRoleInput.schema'

export const RoleUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RoleUncheckedCreateInput, Prisma.RoleUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const RoleUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
