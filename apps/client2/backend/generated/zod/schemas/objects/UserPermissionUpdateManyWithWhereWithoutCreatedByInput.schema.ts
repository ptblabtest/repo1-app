import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionScalarWhereInputObjectSchema } from './UserPermissionScalarWhereInput.schema';
import { UserPermissionUpdateManyMutationInputObjectSchema } from './UserPermissionUpdateManyMutationInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutCreatedByInput.schema'

export const UserPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateManyWithWhereWithoutCreatedByInput, Prisma.UserPermissionUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => UserPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const UserPermissionUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
