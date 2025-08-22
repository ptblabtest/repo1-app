import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithoutUpdatedByInputObjectSchema } from './UserPermissionUpdateWithoutUpdatedByInput.schema';
import { UserPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './UserPermissionUncheckedUpdateWithoutUpdatedByInput.schema';
import { UserPermissionCreateWithoutUpdatedByInputObjectSchema } from './UserPermissionCreateWithoutUpdatedByInput.schema';
import { UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './UserPermissionUncheckedCreateWithoutUpdatedByInput.schema'

export const UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
