import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithoutUpdatedByInputObjectSchema } from './UserPermissionUpdateWithoutUpdatedByInput.schema';
import { UserPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './UserPermissionUncheckedUpdateWithoutUpdatedByInput.schema'

export const UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
