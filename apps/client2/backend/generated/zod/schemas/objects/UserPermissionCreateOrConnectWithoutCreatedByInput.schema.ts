import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionCreateWithoutCreatedByInputObjectSchema } from './UserPermissionCreateWithoutCreatedByInput.schema';
import { UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './UserPermissionUncheckedCreateWithoutCreatedByInput.schema'

export const UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateOrConnectWithoutCreatedByInput, Prisma.UserPermissionCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const UserPermissionCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
