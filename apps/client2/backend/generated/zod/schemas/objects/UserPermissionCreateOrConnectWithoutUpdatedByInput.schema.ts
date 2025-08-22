import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionCreateWithoutUpdatedByInputObjectSchema } from './UserPermissionCreateWithoutUpdatedByInput.schema';
import { UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './UserPermissionUncheckedCreateWithoutUpdatedByInput.schema'

export const UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateOrConnectWithoutUpdatedByInput, Prisma.UserPermissionCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const UserPermissionCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
