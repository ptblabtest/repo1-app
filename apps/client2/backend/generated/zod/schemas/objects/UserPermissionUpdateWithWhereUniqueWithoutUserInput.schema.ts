import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithoutUserInputObjectSchema } from './UserPermissionUpdateWithoutUserInput.schema';
import { UserPermissionUncheckedUpdateWithoutUserInputObjectSchema } from './UserPermissionUncheckedUpdateWithoutUserInput.schema'

export const UserPermissionUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateWithWhereUniqueWithoutUserInput, Prisma.UserPermissionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserPermissionUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPermissionUpdateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
