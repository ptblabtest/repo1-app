import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionUpdateWithoutUsersInputObjectSchema } from './PermissionUpdateWithoutUsersInput.schema';
import { PermissionUncheckedUpdateWithoutUsersInputObjectSchema } from './PermissionUncheckedUpdateWithoutUsersInput.schema';
import { PermissionCreateWithoutUsersInputObjectSchema } from './PermissionCreateWithoutUsersInput.schema';
import { PermissionUncheckedCreateWithoutUsersInputObjectSchema } from './PermissionUncheckedCreateWithoutUsersInput.schema';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema'

export const PermissionUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.PermissionUpsertWithoutUsersInput, Prisma.PermissionUpsertWithoutUsersInput> = z.object({
  update: z.union([z.lazy(() => PermissionUpdateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => PermissionCreateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => PermissionWhereInputObjectSchema).optional()
}).strict();
export const PermissionUpsertWithoutUsersInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => PermissionUpdateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => PermissionCreateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => PermissionWhereInputObjectSchema).optional()
}).strict();
