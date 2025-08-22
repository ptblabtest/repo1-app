import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionScalarWhereInputObjectSchema } from './UserPermissionScalarWhereInput.schema';
import { UserPermissionUpdateManyMutationInputObjectSchema } from './UserPermissionUpdateManyMutationInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const UserPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateManyWithWhereWithoutUpdatedByInput, Prisma.UserPermissionUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => UserPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const UserPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
