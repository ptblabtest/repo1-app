import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionScalarWhereInputObjectSchema } from './UserPermissionScalarWhereInput.schema';
import { UserPermissionUpdateManyMutationInputObjectSchema } from './UserPermissionUpdateManyMutationInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutPermissionInput.schema'

export const UserPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateManyWithWhereWithoutPermissionInput, Prisma.UserPermissionUpdateManyWithWhereWithoutPermissionInput> = z.object({
  where: z.lazy(() => UserPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateManyWithoutPermissionInputObjectSchema)])
}).strict();
export const UserPermissionUpdateManyWithWhereWithoutPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateManyWithoutPermissionInputObjectSchema)])
}).strict();
