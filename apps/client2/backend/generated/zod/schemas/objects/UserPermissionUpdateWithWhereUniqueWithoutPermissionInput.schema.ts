import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithoutPermissionInputObjectSchema } from './UserPermissionUpdateWithoutPermissionInput.schema';
import { UserPermissionUncheckedUpdateWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedUpdateWithoutPermissionInput.schema'

export const UserPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateWithWhereUniqueWithoutPermissionInput, Prisma.UserPermissionUpdateWithWhereUniqueWithoutPermissionInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutPermissionInputObjectSchema)])
}).strict();
export const UserPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutPermissionInputObjectSchema)])
}).strict();
