import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionCreateWithoutPermissionInputObjectSchema } from './UserPermissionCreateWithoutPermissionInput.schema';
import { UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedCreateWithoutPermissionInput.schema'

export const UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateOrConnectWithoutPermissionInput, Prisma.UserPermissionCreateOrConnectWithoutPermissionInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema)])
}).strict();
export const UserPermissionCreateOrConnectWithoutPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema)])
}).strict();
