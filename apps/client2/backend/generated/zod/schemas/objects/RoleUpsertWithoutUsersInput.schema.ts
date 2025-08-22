import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { RoleUpdateWithoutUsersInputObjectSchema } from './RoleUpdateWithoutUsersInput.schema';
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from './RoleUncheckedUpdateWithoutUsersInput.schema';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema'

export const RoleUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.RoleUpsertWithoutUsersInput, Prisma.RoleUpsertWithoutUsersInput> = z.object({
  update: z.union([z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => RoleCreateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => RoleWhereInputObjectSchema).optional()
}).strict();
export const RoleUpsertWithoutUsersInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => RoleCreateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => RoleWhereInputObjectSchema).optional()
}).strict();
