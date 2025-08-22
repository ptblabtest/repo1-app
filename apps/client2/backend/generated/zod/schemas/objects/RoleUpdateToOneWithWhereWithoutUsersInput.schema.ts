import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';
import { RoleUpdateWithoutUsersInputObjectSchema } from './RoleUpdateWithoutUsersInput.schema';
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from './RoleUncheckedUpdateWithoutUsersInput.schema'

export const RoleUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutUsersInput, Prisma.RoleUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => RoleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const RoleUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = z.object({
  where: z.lazy(() => RoleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
