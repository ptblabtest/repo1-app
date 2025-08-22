import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionCreateWithoutUsersInputObjectSchema } from './PermissionCreateWithoutUsersInput.schema';
import { PermissionUncheckedCreateWithoutUsersInputObjectSchema } from './PermissionUncheckedCreateWithoutUsersInput.schema'

export const PermissionCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutUsersInput, Prisma.PermissionCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PermissionCreateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const PermissionCreateOrConnectWithoutUsersInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PermissionCreateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
