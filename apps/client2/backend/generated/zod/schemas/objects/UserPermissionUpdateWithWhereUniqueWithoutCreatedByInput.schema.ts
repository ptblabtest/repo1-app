import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithoutCreatedByInputObjectSchema } from './UserPermissionUpdateWithoutCreatedByInput.schema';
import { UserPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema } from './UserPermissionUncheckedUpdateWithoutCreatedByInput.schema'

export const UserPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.UserPermissionUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const UserPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
