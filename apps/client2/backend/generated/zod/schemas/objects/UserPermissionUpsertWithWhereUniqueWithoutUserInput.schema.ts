import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithoutUserInputObjectSchema } from './UserPermissionUpdateWithoutUserInput.schema';
import { UserPermissionUncheckedUpdateWithoutUserInputObjectSchema } from './UserPermissionUncheckedUpdateWithoutUserInput.schema';
import { UserPermissionCreateWithoutUserInputObjectSchema } from './UserPermissionCreateWithoutUserInput.schema';
import { UserPermissionUncheckedCreateWithoutUserInputObjectSchema } from './UserPermissionUncheckedCreateWithoutUserInput.schema'

export const UserPermissionUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPermissionUpsertWithWhereUniqueWithoutUserInput, Prisma.UserPermissionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPermissionUpdateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserPermissionUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPermissionUpdateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
