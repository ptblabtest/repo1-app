import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithoutCreatedByInputObjectSchema } from './UserPermissionUpdateWithoutCreatedByInput.schema';
import { UserPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema } from './UserPermissionUncheckedUpdateWithoutCreatedByInput.schema';
import { UserPermissionCreateWithoutCreatedByInputObjectSchema } from './UserPermissionCreateWithoutCreatedByInput.schema';
import { UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './UserPermissionUncheckedCreateWithoutCreatedByInput.schema'

export const UserPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.UserPermissionUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const UserPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
