import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionCreateWithoutUserInputObjectSchema } from './UserPermissionCreateWithoutUserInput.schema';
import { UserPermissionUncheckedCreateWithoutUserInputObjectSchema } from './UserPermissionUncheckedCreateWithoutUserInput.schema'

export const UserPermissionCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateOrConnectWithoutUserInput, Prisma.UserPermissionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserPermissionCreateOrConnectWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => UserPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
