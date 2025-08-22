import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithoutPermissionInputObjectSchema } from './UserPermissionUpdateWithoutPermissionInput.schema';
import { UserPermissionUncheckedUpdateWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedUpdateWithoutPermissionInput.schema';
import { UserPermissionCreateWithoutPermissionInputObjectSchema } from './UserPermissionCreateWithoutPermissionInput.schema';
import { UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedCreateWithoutPermissionInput.schema'

export const UserPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionUpsertWithWhereUniqueWithoutPermissionInput, Prisma.UserPermissionUpsertWithWhereUniqueWithoutPermissionInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPermissionUpdateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema)])
}).strict();
export const UserPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPermissionUpdateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema)])
}).strict();
