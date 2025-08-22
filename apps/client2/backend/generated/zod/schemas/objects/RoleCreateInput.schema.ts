import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedManyWithoutRoleInputObjectSchema } from './UserCreateNestedManyWithoutRoleInput.schema'

export const RoleCreateInputObjectSchema: z.ZodType<Prisma.RoleCreateInput, Prisma.RoleCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int(),
  users: z.lazy(() => UserCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const RoleCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  level: z.number().int(),
  users: z.lazy(() => UserCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
