import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionScalarWhereInputObjectSchema } from './UserPermissionScalarWhereInput.schema';
import { UserPermissionUpdateManyMutationInputObjectSchema } from './UserPermissionUpdateManyMutationInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutUserInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutUserInput.schema'

export const UserPermissionUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateManyWithWhereWithoutUserInput, Prisma.UserPermissionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const UserPermissionUpdateManyWithWhereWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
